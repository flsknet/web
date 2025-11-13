import { Button } from "~/components/ui/button";
import { Form } from "~/components/ui/form";
import { TextInput } from "~/components/ui/input";

import {
  createOrganisationInputSchema,
  useCreateOrganisation,
} from "~/features/organisations/api/create-organisation";

export const CreateOrganisation = () => {
  const { mutate } = useCreateOrganisation();

  return (
    <Form
      onSubmit={(data) => mutate({ data })}
      schema={createOrganisationInputSchema}
    >
      <TextInput name="name" />
      <Button type="submit">Create organisation</Button>
    </Form>
  );
};
