import { createFileRoute } from "@tanstack/react-router";
import { ContentLayout } from "~/components/layouts/content-layout";
import { SidebarTrigger } from "~/components/ui/sidebar";

export const Route = createFileRoute(
  "/_app/organisations/$organisationId/overview"
)({
  component: () => (
    <ContentLayout title="Overview">
      <SidebarTrigger />
    </ContentLayout>
  ),
});
