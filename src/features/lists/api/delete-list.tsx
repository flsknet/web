import { useMutation, useQueryClient } from "@tanstack/react-query";

import { api } from "~/lib/api-client";
import type { MutationConfig } from "~/lib/react-query";

import { getListsQueryOptions } from "./get-lists";
import { getTasksQueryOptions } from "~/features/tasks/api/get-tasks";

const deleteList = ({
  organisationId,
  boardId,
  listId,
}: {
  organisationId: string;
  boardId: string;
  listId: string;
}) => {
  return api.delete(
    `/organisations/${organisationId}/boards/${boardId}/lists/${listId}`
  );
};

type UseDeleteListOptions = MutationConfig<typeof deleteList>;

export const useDeleteList = (options?: UseDeleteListOptions) => {
  const queryClient = useQueryClient();

  return useMutation({
    ...options,
    mutationFn: deleteList,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(
        getListsQueryOptions(args[1].organisationId, args[1].boardId)
      );
      queryClient.invalidateQueries(
        getTasksQueryOptions(args[1].organisationId, args[1].boardId)
      );
      options?.onSuccess?.(...args);
    },
  });
};
