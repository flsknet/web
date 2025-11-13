import { createRootRoute, Outlet } from "@tanstack/react-router";

import { Devtools } from "~/components/devtools";
import { Toaster } from "~/components/ui/toast";

export const Route = createRootRoute({
  component: () => (
    <>
      <Devtools />
      <Toaster />
      <Outlet />
    </>
  ),
});
