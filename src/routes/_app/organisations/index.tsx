import { createFileRoute } from "@tanstack/react-router";

import { ContentLayout } from "~/components/layouts/content-layout";
import { Organisations } from "~/features/organisations/components/organisations";

export const Route = createFileRoute("/_app/organisations/")({
  component: () => (
    <ContentLayout title="Organisations">
      <Organisations />
    </ContentLayout>
  ),
});
