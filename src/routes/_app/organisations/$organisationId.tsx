import { createFileRoute, Outlet } from "@tanstack/react-router";

import { queryClient } from "~/lib/react-query";
import {
  Sidebar,
  SidebarHeader,
  SidebarLink,
  SidebarProvider,
  SidebarTrigger,
} from "~/components/ui/sidebar";

import { useOrganisations } from "~/features/organisations/api/get-organisations";
import { getBoardsQueryOptions } from "~/features/boards/api/get-boards";
import {
  Building2Icon,
  CalendarDaysIcon,
  SettingsIcon,
  SquareKanbanIcon,
  UsersIcon,
} from "lucide-react";
import { getEventsQueryOptions } from "~/features/events/api/get-events";

export const Route = createFileRoute("/_app/organisations/$organisationId")({
  beforeLoad: async ({ params: { organisationId } }) => {
    await queryClient.ensureQueryData(getBoardsQueryOptions(organisationId));
    await queryClient.ensureQueryData(getEventsQueryOptions(organisationId));
  },
  component: () => {
    const { organisationId } = Route.useParams();
    const { data } = useOrganisations();

    return (
      <SidebarProvider>
        <Sidebar>
          <SidebarHeader>
            {data!.find(({ id }) => id == organisationId)?.name}
          </SidebarHeader>
          <SidebarLink to="/organisations/$organisationId/overview">
            <Building2Icon size={20} />
            Overview
          </SidebarLink>
          <SidebarLink to="/organisations/$organisationId/members">
            <UsersIcon size={20} />
            Members
          </SidebarLink>
          <SidebarLink to="/organisations/$organisationId/boards">
            <SquareKanbanIcon size={20} />
            Boards
          </SidebarLink>
          <SidebarLink to="/organisations/$organisationId/events">
            <CalendarDaysIcon size={20} />
            Events
          </SidebarLink>
          <SidebarLink to="/organisations/$organisationId/settings">
            <SettingsIcon size={20} />
            Settings
          </SidebarLink>
        </Sidebar>
        <Outlet />
      </SidebarProvider>
    );
  },
});
