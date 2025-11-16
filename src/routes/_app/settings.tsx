import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Trans } from "@lingui/react/macro";

import {
  Sidebar,
  SidebarHeader,
  SidebarLink,
  SidebarProvider,
} from "~/components/ui/sidebar";

export const Route = createFileRoute("/_app/settings")({
  component: () => (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <Trans>Settings</Trans>
        </SidebarHeader>
        <SidebarLink to="/settings/general">
          <Trans>General</Trans>
        </SidebarLink>
        <SidebarLink to="/settings/account">
          <Trans>Account</Trans>
        </SidebarLink>
      </Sidebar>
      <Outlet />
    </SidebarProvider>
  ),
});
