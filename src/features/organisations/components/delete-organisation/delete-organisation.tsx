import { Button } from "~/components/ui/button";
import { Form } from "~/components/ui/form";

import { useDeleteOrganisation } from "~/features/organisations/api/delete-organisation";

type DeleteOrganisationProps = {
  organisationId: string;
};

export const DeleteOrganisation = ({
  organisationId,
}: DeleteOrganisationProps) => {
  const { mutate } = useDeleteOrganisation();

  return (
    <Form onSubmit={() => mutate({ organisationId })}>
      <h2>Delete organisation</h2>
      <Button
        variant="danger"
        type="submit"
      >
        Delete organisation
      </Button>
    </Form>
  );
};
