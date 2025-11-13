import { useMemo } from "react";
import { queryOptions, useQuery } from "@tanstack/react-query";
import z from "zod";

import { api } from "~/lib/api-client";
import type { QueryConfig } from "~/lib/react-query";

const organisationSchema = z.object({
  id: z.string(),
  name: z.string(),
  createdAt: z.string(),
});

const getOrganisations = async () => {
  const { data } = await api.get("/organisations");
  return organisationSchema.array().parse(data);
};

export const getOrganisationsQueryOptions = () => {
  return queryOptions({
    queryKey: ["organisations"],
    queryFn: getOrganisations,
  });
};

type UseOrganisationsOptions = QueryConfig<typeof getOrganisations>;

export const useOrganisations = (options?: UseOrganisationsOptions) => {
  return useQuery({
    ...options,
    ...getOrganisationsQueryOptions(),
  });
};

export const useOrganisation = (
  organisationId: string,
  options?: UseOrganisationsOptions
) => {
  const { data, ...query } = useOrganisations(options);

  const memoized = useMemo(
    () => data?.find(({ id }) => id == organisationId),
    [data]
  );

  return { data: memoized, ...query };
};
