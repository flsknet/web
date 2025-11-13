import { Form } from "~/components/ui/form";
import { TextInput } from "~/components/ui/input";
import { Button } from "~/components/ui/button";

import {
  createListInputSchema,
  useCreateList,
} from "~/features/lists/api/create-list";
import { Modal, ModalTrigger } from "~/components/ui/modal";
import { PlusIcon } from "lucide-react";

import styles from "./create-list.module.css";

type CreateList = {
  organisationId: string;
  boardId: string;
};

export const CreateList = ({ organisationId, boardId }: CreateList) => {
  const { mutate } = useCreateList();

  return (
    <ModalTrigger>
      <Button
        className={styles.trigger}
        variant="secondary"
      >
        <PlusIcon /> New list
      </Button>
      <Modal>
        <Form
          onSubmit={(data) => mutate({ organisationId, boardId, data })}
          schema={createListInputSchema}
        >
          <TextInput
            name="name"
            label="List name"
            placeholder="List title"
          />
          <Button type="submit">Create</Button>
        </Form>
      </Modal>
    </ModalTrigger>
  );
};
