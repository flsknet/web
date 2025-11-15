import { createFileRoute } from "@tanstack/react-router";

import { ContentLayout } from "~/components/layouts/content-layout";
import { Events } from "~/features/events/components/events/events";

export const Route = createFileRoute(
  "/_app/organisations/$organisationId/events"
)({
  component: () => {
    const { organisationId } = Route.useParams();

    return (
      <ContentLayout title="Events">
        <Events organisationsId={organisationId} />
      </ContentLayout>
    );
  },
});
