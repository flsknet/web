import { queryOptions, useQuery } from "@tanstack/react-query";
import z from "zod";

import { api } from "~/lib/api-client";
import type { QueryConfig } from "~/lib/react-query";

const taskSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  listId: z.string().nullable().optional(),
});

const getTasks = async ({
  organisationId,
  boardId,
}: {
  organisationId: string;
  boardId: string;
}) => {
  const { data } = await api.get(
    `/organisations/${organisationId}/boards/${boardId}/tasks`
  );
  return taskSchema.array().parse(data);
};

export const getTasksQueryOptions = (
  organisationId: string,
  boardId: string
) => {
  return queryOptions({
    queryKey: ["organisations", organisationId, "boards", boardId, "tasks"],
    queryFn: () => getTasks({ organisationId, boardId }),
  });
};

type UseTasksQueryOptions = QueryConfig<typeof getTasks>;

export const useTasks = (
  organisationId: string,
  boardId: string,
  options?: UseTasksQueryOptions
) => {
  return useQuery({
    ...options,
    ...getTasksQueryOptions(organisationId, boardId),
  });
};
