import { createFileRoute, Navigate, Outlet } from "@tanstack/react-router";
import { Trans } from "@lingui/react/macro";
import {
  Building2Icon,
  CalendarDaysIcon,
  SettingsIcon,
  SquareKanbanIcon,
  UsersIcon,
} from "lucide-react";

import { queryClient } from "~/lib/react-query";
import {
  Sidebar,
  SidebarHeader,
  SidebarLink,
  SidebarProvider,
} from "~/components/ui/sidebar";

import { getMembersQueryOptions } from "~/features/members/api/get-members";
import { getBoardsQueryOptions } from "~/features/boards/api/get-boards";
import { getEventsQueryOptions } from "~/features/events/api/get-events";
import { useOrganisation } from "~/features/organisations/api/get-organisations";

export const Route = createFileRoute("/_app/organisations/$organisationId")({
  beforeLoad: async ({ params: { organisationId } }) => {
    await queryClient.ensureQueryData(getMembersQueryOptions(organisationId));
    await queryClient.ensureQueryData(getBoardsQueryOptions(organisationId));
    await queryClient.ensureQueryData(getEventsQueryOptions(organisationId));
  },
  component: () => {
    const { organisationId } = Route.useParams();

    const { data } = useOrganisation(organisationId);

    if (!data) {
      return <Navigate to="/organisations" />;
    }

    return (
      <SidebarProvider>
        <Sidebar>
          <SidebarHeader>{data!.name}</SidebarHeader>
          <SidebarLink to="/organisations/$organisationId/overview">
            <Building2Icon size={20} />
            <Trans>Overview</Trans>
          </SidebarLink>
          <SidebarLink to="/organisations/$organisationId/members">
            <UsersIcon size={20} />
            <Trans>Members</Trans>
          </SidebarLink>
          <SidebarLink to="/organisations/$organisationId/boards">
            <SquareKanbanIcon size={20} />
            <Trans>Boards</Trans>
          </SidebarLink>
          <SidebarLink to="/organisations/$organisationId/events">
            <CalendarDaysIcon size={20} />
            <Trans>Events</Trans>
          </SidebarLink>
          <SidebarLink to="/organisations/$organisationId/settings">
            <SettingsIcon size={20} />
            <Trans>Settings</Trans>
          </SidebarLink>
        </Sidebar>
        <Outlet />
      </SidebarProvider>
    );
  },
});
