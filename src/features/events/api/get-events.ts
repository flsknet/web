import { useMemo } from "react";
import { queryOptions, useQuery } from "@tanstack/react-query";
import z from "zod";

import { api } from "~/lib/api-client";
import type { QueryConfig } from "~/lib/react-query";

const eventSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().nullable(),
});

const getEvents = async ({ organisationId }: { organisationId: string }) => {
  const { data } = await api.get(`/organisations/${organisationId}/events`);
  return eventSchema.array().parse(data);
};

export const getEventsQueryOptions = (organisationId: string) => {
  return queryOptions({
    queryKey: ["organisation", organisationId, "events"],
    queryFn: () => getEvents({ organisationId }),
  });
};

type UseEventsOptions = QueryConfig<typeof getEvents>;

export const useEvents = (
  organisationId: string,
  options?: UseEventsOptions
) => {
  return useQuery({
    ...options,
    ...getEventsQueryOptions(organisationId),
  });
};

export const useEvent = (
  organisationId: string,
  eventId: string,
  options?: UseEventsOptions
) => {
  const { data, ...query } = useEvents(organisationId, options);

  const memoized = useMemo(() => data?.find(({ id }) => id == eventId), [data]);

  return { data: memoized, ...query };
};
