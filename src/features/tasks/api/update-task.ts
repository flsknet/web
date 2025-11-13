import { useMutation, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";

import { api } from "~/lib/api-client";
import type { MutationConfig } from "~/lib/react-query";

import { getTasksQueryOptions } from "./get-tasks";

export const updateTaskInputSchema = z.object({
  // name: z.string().min(1).optional(),
  // description: z.string().optional(),
  listId: z.string().nullable().optional(),
});

export type UpdateTaskInput = z.infer<typeof updateTaskInputSchema>;

const updateTask = ({
  organisationId,
  boardId,
  taskId,
  data,
}: {
  organisationId: string;
  boardId: string;
  taskId: string;
  data: UpdateTaskInput;
}) => {
  return api.patch(
    `/organisations/${organisationId}/boards/${boardId}/tasks/${taskId}`,
    data
  );
};

type UseUpdateTaskOptions = MutationConfig<typeof updateTask>;

export const useUpdateTask = (options?: UseUpdateTaskOptions) => {
  const queryClient = useQueryClient();

  return useMutation({
    ...options,
    mutationFn: updateTask,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(
        getTasksQueryOptions(args[1].organisationId, args[1].boardId)
      );
      options?.onSuccess?.(...args);
    },
  });
};
