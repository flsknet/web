import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/_app/organisations/$organisationId/overview"
)({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_app/organisations/$organisationId/overview"!</div>;
}
