import { useMutation, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";

import { api } from "~/lib/api-client";
import type { MutationConfig } from "~/lib/react-query";

import { getTasksQueryOptions } from "./get-tasks";

export const createTaskInputSchema = z.object({
  title: z.string().min(1),
  description: z.string(),
  listId: z.string().optional(),
});

export type CreateTaskInput = z.infer<typeof createTaskInputSchema>;

const createTask = ({
  organisationId,
  boardId,
  data,
}: {
  organisationId: string;
  boardId: string;
  data: CreateTaskInput;
}) => {
  return api.post(
    `/organisations/${organisationId}/boards/${boardId}/tasks`,
    data
  );
};

type UseCreateTaskOptions = MutationConfig<typeof createTask>;

export const useCreateTask = (options?: UseCreateTaskOptions) => {
  const queryClient = useQueryClient();

  return useMutation({
    ...options,
    mutationFn: createTask,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(
        getTasksQueryOptions(args[1].organisationId, args[1].boardId)
      );
      options?.onSuccess?.(...args);
    },
  });
};
