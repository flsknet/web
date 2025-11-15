import { Button } from "~/components/ui/button";

import { useDeleteOrganisation } from "~/features/organisations/api/delete-organisation";

type DeleteOrganisationProps = {
  organisationId: string;
};

export const DeleteOrganisation = ({
  organisationId,
}: DeleteOrganisationProps) => {
  const { mutate } = useDeleteOrganisation();

  return (
    <Button
      onClick={() => mutate({ organisationId })}
      variant="danger"
      type="submit"
    >
      Delete organisation
    </Button>
  );
};
