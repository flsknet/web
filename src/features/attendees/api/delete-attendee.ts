import { useMutation, useQueryClient } from "@tanstack/react-query";

import { api } from "~/lib/api-client";
import type { MutationConfig } from "~/lib/react-query";

import { getAttendeesQueryOptions } from "./get-attendees";

const deleteAttendee = ({
  organisationId,
  eventId,
  attendeeId,
}: {
  organisationId: string;
  eventId: string;
  attendeeId: string;
}) => {
  return api.delete(
    `/organisations/${organisationId}/events/${eventId}/attendees/${attendeeId}`
  );
};

type UseDeleteAttendeeOptions = MutationConfig<typeof deleteAttendee>;

export const useDeleteAttendee = (options?: UseDeleteAttendeeOptions) => {
  const queryClient = useQueryClient();

  return useMutation({
    ...options,
    mutationFn: deleteAttendee,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(
        getAttendeesQueryOptions(args[1].organisationId, args[1].eventId)
      );
      options?.onSuccess?.(...args);
    },
  });
};
