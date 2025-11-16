import { createFileRoute } from "@tanstack/react-router";

import { queryClient } from "~/lib/react-query";
import { ContentLayout } from "~/components/layouts/content-layout";

import { getAttendeesQueryOptions } from "~/features/attendees/api/get-attendees";
import { useEvent } from "~/features/events/api/get-events";
import { Attendees } from "~/features/attendees/components/attendees";

export const Route = createFileRoute(
  "/_app/organisations/$organisationId/events/$eventId"
)({
  beforeLoad: ({ params: { organisationId, eventId } }) => {
    return queryClient.ensureQueryData(
      getAttendeesQueryOptions(organisationId, eventId)
    );
  },
  component: () => {
    const { organisationId, eventId } = Route.useParams();
    const { data } = useEvent(organisationId, eventId);

    return (
      <ContentLayout title={data?.name}>
        <Attendees
          organisationId={organisationId}
          eventId={eventId}
        />
      </ContentLayout>
    );
  },
});
