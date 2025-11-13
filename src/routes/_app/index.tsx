import { createFileRoute } from "@tanstack/react-router";

import { Page } from "~/components/ui/page/page";

export const Route = createFileRoute("/_app/")({
  component: () => {
    return <Page centered>Flask app</Page>;
  },
});
