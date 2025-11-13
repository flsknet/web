import { queryOptions, useQuery } from "@tanstack/react-query";
import z from "zod";

import { api } from "~/lib/api-client";
import type { QueryConfig } from "~/lib/react-query";

const memberSchema = z.object({
  role: z.string(),
  joinedAt: z.string(),
  organisationId: z.string(),
  userId: z.string(),
});

const getMembers = async ({ organisationId }: { organisationId: string }) => {
  const { data } = await api.get(`/organisations/${organisationId}/members`);
  return memberSchema.array().parse(data);
};

export const getMembersQueryOptions = (organisationId: string) => {
  return queryOptions({
    queryKey: ["organisations", organisationId, "members"],
    queryFn: () => getMembers({ organisationId }),
  });
};

type UseMembersOptions = QueryConfig<typeof getMembers>;

export const useMembers = (
  organisationId: string,
  options?: UseMembersOptions
) => {
  return useQuery({
    ...options,
    ...getMembersQueryOptions(organisationId),
  });
};
