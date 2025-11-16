import { Trans, useLingui } from "@lingui/react/macro";

import { Form } from "~/components/ui/form";
import { TextInput } from "~/components/ui/input";
import { Button } from "~/components/ui/button";

import {
  updateBoardInputSchema,
  useUpdateBoard,
} from "~/features/boards/api/update-board";

type UpdateBoardProps = {
  organisationId: string;
  boardId: string;
};

export const UpdateBoard = ({ organisationId, boardId }: UpdateBoardProps) => {
  const { t } = useLingui();

  const { mutate } = useUpdateBoard();

  return (
    <Form
      onSubmit={(data) => mutate({ organisationId, boardId, data })}
      schema={updateBoardInputSchema}
    >
      <TextInput
        name="name"
        label={t`Name`}
        placeholder={t`Project 1`}
      />
      <Button type="submit">
        <Trans>Save</Trans>
      </Button>
    </Form>
  );
};
