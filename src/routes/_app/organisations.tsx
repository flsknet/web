import { createFileRoute } from "@tanstack/react-router";

import { queryClient } from "~/lib/react-query";
import { getOrganisationsQueryOptions } from "~/features/organisations/api/get-organisations";

export const Route = createFileRoute("/_app/organisations")({
  beforeLoad: () => {
    return queryClient.ensureQueryData(getOrganisationsQueryOptions());
  },
});
