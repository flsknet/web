import { createFileRoute } from "@tanstack/react-router";
import { Page } from "~/components/ui/page/page";

import { MemberList } from "~/features/members/components/member-list";

export const Route = createFileRoute(
  "/_app/organisations/$organisationId/members"
)({
  component: () => {
    const { organisationId } = Route.useParams();

    return (
      <Page>
        <MemberList organisationId={organisationId} />
      </Page>
    );
  },
});
