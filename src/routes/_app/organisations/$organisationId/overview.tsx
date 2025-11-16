import { createFileRoute } from "@tanstack/react-router";
import { useLingui } from "@lingui/react/macro";

import { ContentLayout } from "~/components/layouts/content-layout";
import { SidebarTrigger } from "~/components/ui/sidebar";

export const Route = createFileRoute(
  "/_app/organisations/$organisationId/overview"
)({
  component: () => {
    const { t } = useLingui();

    return (
      <ContentLayout title={t`Overview`}>
        <SidebarTrigger />
      </ContentLayout>
    );
  },
});
