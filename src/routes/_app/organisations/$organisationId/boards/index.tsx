import { createFileRoute } from "@tanstack/react-router";
import { useLingui } from "@lingui/react/macro";

import { ContentLayout } from "~/components/layouts/content-layout";
import { Boards } from "~/features/boards/components/boards";

export const Route = createFileRoute(
  "/_app/organisations/$organisationId/boards/"
)({
  component: () => {
    const { organisationId } = Route.useParams();
    const { t } = useLingui();

    return (
      <ContentLayout title={t`Boards`}>
        <Boards organisationId={organisationId} />
      </ContentLayout>
    );
  },
});
