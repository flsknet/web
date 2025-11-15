import { createFileRoute } from "@tanstack/react-router";

import { ContentLayout } from "~/components/layouts/content-layout";
import { Boards } from "~/features/boards/components/boards";

export const Route = createFileRoute(
  "/_app/organisations/$organisationId/boards/"
)({
  component: () => {
    const { organisationId } = Route.useParams();

    return (
      <ContentLayout title="Boards">
        <Boards organisationId={organisationId} />
      </ContentLayout>
    );
  },
});
