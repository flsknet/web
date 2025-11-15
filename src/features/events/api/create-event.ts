import { useMutation, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";

import { api } from "~/lib/api-client";
import type { MutationConfig } from "~/lib/react-query";

import { getEventsQueryOptions } from "./get-events";

export const createEventInputSchema = z.object({
  name: z.string().min(1),
  descriptiom: z.string().optional(),
});

export type CreateEventInput = z.infer<typeof createEventInputSchema>;

const createEvent = ({
  organisationId,
  data,
}: {
  organisationId: string;
  data: CreateEventInput;
}) => {
  return api.post(`/organisations/${organisationId}/events`, data);
};

type UseCreateEventOptions = MutationConfig<typeof createEvent>;

export const useCreateEvent = (options?: UseCreateEventOptions) => {
  const queryClient = useQueryClient();

  return useMutation({
    ...options,
    mutationFn: createEvent,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(
        getEventsQueryOptions(args[1].organisationId)
      );
      options?.onSuccess?.(...args);
    },
  });
};
