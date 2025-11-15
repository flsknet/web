import { useMutation, useQueryClient } from "@tanstack/react-query";

import { api } from "~/lib/api-client";
import type { MutationConfig } from "~/lib/react-query";

import { getEventsQueryOptions } from "./get-events";

const deleteEvent = ({
  organisationId,
  EventId,
}: {
  organisationId: string;
  EventId: string;
}) => {
  return api.delete(`/organisations/${organisationId}/events/${EventId}`);
};

type UseDeleteEventOptions = MutationConfig<typeof deleteEvent>;

export const useDeleteEvent = (options?: UseDeleteEventOptions) => {
  const queryClient = useQueryClient();

  return useMutation({
    ...options,
    mutationFn: deleteEvent,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(
        getEventsQueryOptions(args[1].organisationId)
      );
      options?.onSuccess?.(...args);
    },
  });
};
