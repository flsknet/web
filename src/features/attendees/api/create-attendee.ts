import { useMutation, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";

import { api } from "~/lib/api-client";
import type { MutationConfig } from "~/lib/react-query";

import { getAttendeesQueryOptions } from "./get-attendees";

export const createAttendeeInputSchema = z.object({
  userId: z.string(),
});

export type CreateAttendeeInput = z.infer<typeof createAttendeeInputSchema>;

const createAttendee = ({
  organisationId,
  eventId,
  data,
}: {
  organisationId: string;
  eventId: string;
  data: CreateAttendeeInput;
}) => {
  return api.post(
    `/organisations/${organisationId}/events/${eventId}/attendees`,
    data
  );
};

type UseCreateAttendeeOptions = MutationConfig<typeof createAttendee>;

export const useCreateAttendee = (options?: UseCreateAttendeeOptions) => {
  const queryClient = useQueryClient();

  return useMutation({
    ...options,
    mutationFn: createAttendee,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(
        getAttendeesQueryOptions(args[1].organisationId, args[1].eventId)
      );
      options?.onSuccess?.(...args);
    },
  });
};
