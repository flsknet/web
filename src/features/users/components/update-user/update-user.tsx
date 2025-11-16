import { useLingui, Trans } from "@lingui/react/macro";

import { useSession } from "~/lib/auth";

import { Form } from "~/components/ui/form";
import { TextInput } from "~/components/ui/input";
import { Button } from "~/components/ui/button";

import {
  updateUserInputSchema,
  useUpdateUser,
} from "~/features/users/api/update-user";

export const UpdateUser = () => {
  const { t } = useLingui();

  const { data, isPending } = useSession();

  const { mutate } = useUpdateUser();

  if (isPending) {
    return <></>;
  }

  return (
    <Form
      onSubmit={(data) => mutate({ data })}
      schema={updateUserInputSchema}
    >
      <TextInput
        name="name"
        label={t`Name`}
        placeholder={t`John Doe`}
        defaultValue={data!.user.name}
      />
      <Button type="submit">
        <Trans>Save</Trans>
      </Button>
    </Form>
  );
};
