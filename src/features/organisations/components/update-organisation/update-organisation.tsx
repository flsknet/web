import { Form } from "~/components/ui/form";
import { TextInput } from "~/components/ui/input";
import { Button } from "~/components/ui/button";

import { useOrganisation } from "~/features/organisations/api/get-organisations";
import {
  updateOrganisationInputSchema,
  useUpdateOrganisation,
} from "~/features/organisations/api/update-organisation";

type UpdateOrganisationProps = {
  organisationId: string;
};

export const UpdateOrganisation = ({
  organisationId,
}: UpdateOrganisationProps) => {
  const { mutate } = useUpdateOrganisation();
  const { data } = useOrganisation(organisationId);

  return (
    <Form
      onSubmit={(data) => mutate({ organisationId, data })}
      schema={updateOrganisationInputSchema}
    >
      <TextInput
        name="name"
        label="Organisation name"
        placeholder="Acme Corporation"
        defaultValue={data!.name}
      />
      <Button type="submit">Save</Button>
    </Form>
  );
};
