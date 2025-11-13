import { useMemo } from "react";
import { queryOptions, useQuery } from "@tanstack/react-query";
import z from "zod";

import { api } from "~/lib/api-client";
import type { QueryConfig } from "~/lib/react-query";

const boardsSchema = z.object({
  id: z.string(),
  name: z.string(),
});

const getBoards = async ({ organisationId }: { organisationId: string }) => {
  const { data } = await api.get(`/organisations/${organisationId}/boards`);
  return boardsSchema.array().parse(data);
};

export const getBoardsQueryOptions = (organisationId: string) => {
  return queryOptions({
    queryKey: ["organisation", organisationId, "boards"],
    queryFn: () => getBoards({ organisationId }),
  });
};

type UseBoardsOptions = QueryConfig<typeof getBoards>;

export const useBoards = (
  organisationId: string,
  options?: UseBoardsOptions
) => {
  return useQuery({
    ...options,
    ...getBoardsQueryOptions(organisationId),
  });
};

export const useBoard = (
  organisationId: string,
  boardId: string,
  options?: UseBoardsOptions
) => {
  const { data, ...query } = useBoards(organisationId, options);

  const memoized = useMemo(() => data?.find(({ id }) => id == boardId), [data]);

  return { data: memoized, ...query };
};
