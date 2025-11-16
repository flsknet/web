import { createFileRoute } from "@tanstack/react-router";
import { useLingui } from "@lingui/react/macro";

import { ContentLayout } from "~/components/layouts/content-layout";
import { Events } from "~/features/events/components/events/events";

export const Route = createFileRoute(
  "/_app/organisations/$organisationId/events/"
)({
  component: () => {
    const { organisationId } = Route.useParams();
    const { t } = useLingui();

    return (
      <ContentLayout title={t`Events`}>
        <Events organisationId={organisationId} />
      </ContentLayout>
    );
  },
});
