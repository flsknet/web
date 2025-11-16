import { createFileRoute } from "@tanstack/react-router";
import { useLingui } from "@lingui/react/macro";

import { ContentLayout } from "~/components/layouts/content-layout";
import { Organisations } from "~/features/organisations/components/organisations";

export const Route = createFileRoute("/_app/organisations/")({
  component: () => {
    const { t } = useLingui();

    return (
      <ContentLayout title={t`Organisations`}>
        <Organisations />
      </ContentLayout>
    );
  },
});
