import { queryOptions, useQuery } from "@tanstack/react-query";
import z from "zod";

import { api } from "~/lib/api-client";
import type { QueryConfig } from "~/lib/react-query";

const attendeeSchema = z.object({
  userId: z.string(),
});

const getAttendees = async ({
  organisationId,
  eventId,
}: {
  organisationId: string;
  eventId: string;
}) => {
  const { data } = await api.get(
    `/organisations/${organisationId}/events/${eventId}/attendees`
  );
  return attendeeSchema.array().parse(data);
};

export const getAttendeesQueryOptions = (
  organisationId: string,
  eventId: string
) => {
  return queryOptions({
    queryKey: ["organisations", organisationId, "events", eventId, "attendees"],
    queryFn: () => getAttendees({ organisationId, eventId }),
  });
};

type UseAttendeesOptions = QueryConfig<typeof getAttendees>;

export const useAttendees = (
  organisationId: string,
  eventId: string,
  options?: UseAttendeesOptions
) => {
  return useQuery({
    ...options,
    ...getAttendeesQueryOptions(organisationId, eventId),
  });
};
