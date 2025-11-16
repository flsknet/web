import { createFileRoute } from "@tanstack/react-router";

import { queryClient } from "~/lib/react-query";
import { ContentLayout } from "~/components/layouts/content-layout";

import { getListsQueryOptions } from "~/features/lists/api/get-lists";
import { useBoard } from "~/features/boards/api/get-boards";
import { Lists } from "~/features/lists/components/lists";

export const Route = createFileRoute(
  "/_app/organisations/$organisationId/boards/$boardId"
)({
  beforeLoad: ({ params: { organisationId, boardId } }) => {
    return queryClient.ensureQueryData(
      getListsQueryOptions(organisationId, boardId)
    );
  },
  component: () => {
    const { organisationId, boardId } = Route.useParams();
    const { data } = useBoard(organisationId, boardId);

    return (
      <ContentLayout title={data?.name}>
        <Lists
          organisationId={organisationId}
          boardId={boardId}
        />
      </ContentLayout>
    );
  },
});
