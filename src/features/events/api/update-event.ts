import { useMutation, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";

import { api } from "~/lib/api-client";
import type { MutationConfig } from "~/lib/react-query";

import { getEventsQueryOptions } from "./get-events";

export const updateEventInputSchema = z.object({
  name: z.string().min(1),
  description: z.string().optional(),
});

export type UpdateEventInput = z.infer<typeof updateEventInputSchema>;

const updateEvent = ({
  organisationId,
  eventId,
  data,
}: {
  organisationId: string;
  eventId: string;
  data: UpdateEventInput;
}) => {
  return api.patch(`/organisations/${organisationId}/events/${eventId}`, data);
};

type UseUpdateEventOptions = MutationConfig<typeof updateEvent>;

export const useUpdateEvent = (options?: UseUpdateEventOptions) => {
  const queryClient = useQueryClient();

  return useMutation({
    ...options,
    mutationFn: updateEvent,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(
        getEventsQueryOptions(args[1].organisationId)
      );
      options?.onSuccess?.(...args);
    },
  });
};
