import { createFileRoute } from "@tanstack/react-router";

import { Page } from "~/components/ui/page/page";
import { useBoard } from "~/features/boards/api/get-boards";

import { Lists } from "~/features/lists/components/lists";

export const Route = createFileRoute(
  "/_app/organisations/$organisationId/boards/$boardId"
)({
  component: () => {
    const { organisationId, boardId } = Route.useParams();
    const { data } = useBoard(organisationId, boardId);

    return (
      <Page>
        <h1>{data?.name}</h1>
        <Lists
          organisationId={organisationId}
          boardId={boardId}
        />
      </Page>
    );
  },
});
