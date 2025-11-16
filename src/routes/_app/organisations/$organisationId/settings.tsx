import { createFileRoute } from "@tanstack/react-router";
import { useLingui } from "@lingui/react/macro";

import { ContentLayout } from "~/components/layouts/content-layout";

import { DeleteOrganisation } from "~/features/organisations/components/delete-organisation";
import { UpdateOrganisation } from "~/features/organisations/components/update-organisation";
import { Button } from "~/components/ui/button";

export const Route = createFileRoute(
  "/_app/organisations/$organisationId/settings"
)({
  component: () => {
    const { organisationId } = Route.useParams();

    const { t } = useLingui();

    return (
      <ContentLayout title={t`Organisation settings`}>
        <UpdateOrganisation organisationId={organisationId} />
        <DeleteOrganisation organisationId={organisationId}>
          <Button variant="danger">Delete organisation</Button>
        </DeleteOrganisation>
      </ContentLayout>
    );
  },
});
