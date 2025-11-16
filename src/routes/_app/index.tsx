import { createFileRoute } from "@tanstack/react-router";

import { Home } from "~/components/views/home";

export const Route = createFileRoute("/_app/")({
  component: Home,
});
