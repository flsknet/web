import { createFileRoute } from "@tanstack/react-router";

import { Page } from "~/components/ui/page/page";
import { BoardList } from "~/features/boards/components/board-list";

export const Route = createFileRoute(
  "/_app/organisations/$organisationId/boards/"
)({
  component: () => {
    const { organisationId } = Route.useParams();

    return (
      <Page>
        <h1>Boards</h1>
        <BoardList organisationId={organisationId} />
      </Page>
    );
  },
});
