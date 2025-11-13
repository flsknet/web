import { createFileRoute } from "@tanstack/react-router";
import { CreateOrganisation } from "~/features/organisations/components/create-organisation";

import { OrganisationList } from "~/features/organisations/components/organisation-list";

export const Route = createFileRoute("/_app/organisations/")({
  component: () => {
    return (
      <div>
        <h1>Organisations</h1>
        <OrganisationList />
        <CreateOrganisation />
      </div>
    );
  },
});
