import { createFileRoute } from "@tanstack/react-router";
import { useLingui } from "@lingui/react/macro";

import { ContentLayout } from "~/components/layouts/content-layout";
import { Members } from "~/features/members/components/members";

export const Route = createFileRoute(
  "/_app/organisations/$organisationId/members"
)({
  component: () => {
    const { organisationId } = Route.useParams();
    const { t } = useLingui();

    return (
      <ContentLayout title={t`Members`}>
        <Members organisationId={organisationId} />
      </ContentLayout>
    );
  },
});
