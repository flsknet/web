import { createFileRoute } from "@tanstack/react-router";
import { useLingui } from "@lingui/react/macro";

import { ContentLayout } from "~/components/layouts/content-layout";

export const Route = createFileRoute("/_app/settings/general")({
  component: () => {
    const { t } = useLingui();

    return (
      <ContentLayout title={t`General settings`}>
        <div>test</div>
      </ContentLayout>
    );
  },
});
