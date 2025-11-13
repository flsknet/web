import { createFileRoute } from "@tanstack/react-router";

import { Page } from "~/components/ui/page/page";

import { DeleteOrganisation } from "~/features/organisations/components/delete-organisation";
import { UpdateOrganisation } from "~/features/organisations/components/update-organisation";

export const Route = createFileRoute(
  "/_app/organisations/$organisationId/settings"
)({
  component: () => {
    const { organisationId } = Route.useParams();

    return (
      <Page>
        <h1>Organisation settings</h1>
        <UpdateOrganisation organisationId={organisationId} />
        <DeleteOrganisation organisationId={organisationId} />
      </Page>
    );
  },
});
