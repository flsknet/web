import { createFileRoute, Outlet } from "@tanstack/react-router";

import {
  Sidebar,
  SidebarHeader,
  SidebarLink,
  SidebarProvider,
} from "~/components/ui/sidebar";

export const Route = createFileRoute("/_app/settings")({
  component: () => {
    return (
      <SidebarProvider>
        <Sidebar>
          <SidebarHeader>Settings</SidebarHeader>
          <SidebarLink to="/settings/general">General</SidebarLink>
          <SidebarLink to="/settings/account">Account</SidebarLink>
          <SidebarLink to="/settings/profile">Profile</SidebarLink>
          <SidebarLink to="/settings/appearance">Appearance</SidebarLink>
          <SidebarLink to="/settings/language">Language</SidebarLink>
        </Sidebar>
        <Outlet />
      </SidebarProvider>
    );
  },
});
