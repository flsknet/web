import { queryOptions, useQuery } from "@tanstack/react-query";
import z from "zod";

import { api } from "~/lib/api-client";
import type { QueryConfig } from "~/lib/react-query";

const listSchema = z.object({
  id: z.string(),
  name: z.string(),
});

const getLists = async ({
  organisationId,
  boardId,
}: {
  organisationId: string;
  boardId: string;
}) => {
  const { data } = await api.get(
    `/organisations/${organisationId}/boards/${boardId}/lists`
  );
  return listSchema.array().parse(data);
};

export const getListsQueryOptions = (
  organisationId: string,
  boardId: string
) => {
  return queryOptions({
    queryKey: ["organisations", organisationId, "boards", boardId, "list"],
    queryFn: () => getLists({ organisationId, boardId }),
  });
};

type UseListsQueryOptions = QueryConfig<typeof getLists>;

export const useLists = (
  organisationId: string,
  boardId: string,
  options?: UseListsQueryOptions
) => {
  return useQuery({
    ...options,
    ...getListsQueryOptions(organisationId, boardId),
  });
};
