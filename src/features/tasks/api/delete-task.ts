import { useMutation, useQueryClient } from "@tanstack/react-query";

import { api } from "~/lib/api-client";
import type { MutationConfig } from "~/lib/react-query";

import { getTasksQueryOptions } from "./get-tasks";

const deleteTask = ({
  organisationId,
  boardId,
  taskId,
}: {
  organisationId: string;
  boardId: string;
  taskId: string;
}) => {
  return api.delete(
    `/organisations/${organisationId}/boards/${boardId}/tasks/${taskId}`
  );
};

type UseDeleteTaskOptions = MutationConfig<typeof deleteTask>;

export const useDeleteTask = (options?: UseDeleteTaskOptions) => {
  const queryClient = useQueryClient();

  return useMutation({
    ...options,
    mutationFn: deleteTask,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(
        getTasksQueryOptions(args[1].organisationId, args[1].boardId)
      );
      options?.onSuccess?.(...args);
    },
  });
};
