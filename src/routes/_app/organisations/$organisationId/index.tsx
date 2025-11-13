import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/organisations/$organisationId/")({
  beforeLoad: ({ params }) => {
    return redirect({ to: "/organisations/$organisationId/overview", params });
  },
});
