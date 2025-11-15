import { createFileRoute } from "@tanstack/react-router";

import { ContentLayout } from "~/components/layouts/content-layout";

import { DeleteOrganisation } from "~/features/organisations/components/delete-organisation";
import { UpdateOrganisation } from "~/features/organisations/components/update-organisation";

export const Route = createFileRoute(
  "/_app/organisations/$organisationId/settings"
)({
  component: () => {
    const { organisationId } = Route.useParams();

    return (
      <ContentLayout title="Organisation settings">
        <UpdateOrganisation organisationId={organisationId} />
        <DeleteOrganisation organisationId={organisationId} />
      </ContentLayout>
    );
  },
});
