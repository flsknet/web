import type { ReactNode } from "react";
import { useLingui, Trans } from "@lingui/react/macro";

import { Modal, ModalTrigger } from "~/components/ui/modal";
import { Form } from "~/components/ui/form";
import { TextInput } from "~/components/ui/input";
import { Button } from "~/components/ui/button";

import {
  createBoardInputSchema,
  useCreateBoard,
} from "~/features/boards/api/create-board";

type CreateBoardProps = {
  organisationId: string;
  children?: ReactNode;
};

export const CreateBoard = ({ children, organisationId }: CreateBoardProps) => {
  const { t } = useLingui();

  const { mutate } = useCreateBoard();

  return (
    <ModalTrigger>
      {children}
      <Modal title={t`Create a board`}>
        <Form
          onSubmit={(data) => mutate({ organisationId, data })}
          schema={createBoardInputSchema}
        >
          <TextInput
            name="name"
            label={t`Name`}
            placeholder={t`Project 1`}
          />
          <Button type="submit">
            <Trans>Create</Trans>
          </Button>
          <Button
            variant="secondary"
            slot="close"
          >
            <Trans>Cancel</Trans>
          </Button>
        </Form>
      </Modal>
    </ModalTrigger>
  );
};
