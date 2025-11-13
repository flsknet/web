import { queryOptions, useQuery } from "@tanstack/react-query";
import z from "zod";

import { api } from "~/lib/api-client";
import type { QueryConfig } from "~/lib/react-query";

const userSchema = z.object({
  id: z.string(),
  name: z.string(),
  createdAt: z.string(),
});

const getUser = async ({ userId }: { userId: string }) => {
  const { data } = await api.get(`/users/${userId}`);
  return userSchema.parse(data);
};

export const getUserQueryOptions = (userId: string) => {
  return queryOptions({
    queryKey: ["users", userId],
    queryFn: () => getUser({ userId }),
  });
};

type UseUserOptions = QueryConfig<typeof getUser>;

export const useUser = (userId: string, options?: UseUserOptions) => {
  return useQuery({
    ...options,
    ...getUserQueryOptions(userId),
  });
};
