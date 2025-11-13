import { Form } from "~/components/ui/form";
import { TextInput } from "~/components/ui/input";
import { Button } from "~/components/ui/button";

import {
  createTaskInputSchema,
  useCreateTask,
} from "~/features/tasks/api/create-task";
import { Modal, ModalTrigger } from "~/components/ui/modal";
import { useState } from "react";

import styles from "./create-task.module.css";
import { PlusIcon } from "lucide-react";

type CreateTask = {
  organisationId: string;
  boardId: string;
  listId?: string;
};

export const CreateTask = ({ organisationId, boardId, listId }: CreateTask) => {
  const [isOpen, setIsOpen] = useState(false);
  const { mutate } = useCreateTask({ onSuccess: () => setIsOpen(false) });

  return (
    <ModalTrigger
      isOpen={isOpen}
      onOpenChange={(isOpen) => setIsOpen(isOpen)}
    >
      <Button
        className={styles.button}
        variant="secondary"
      >
        <PlusIcon />
        New task
      </Button>
      <Modal>
        <Form
          onSubmit={(data) => {
            return mutate({
              organisationId,
              boardId,
              data: { ...data, listId },
            });
          }}
          schema={createTaskInputSchema}
        >
          <TextInput
            name="title"
            label="Title"
            placeholder="Task title"
          />
          <TextInput
            name="description"
            label="Description"
            placeholder="Task desc"
          />
          <Button type="submit">Create</Button>
        </Form>
      </Modal>
    </ModalTrigger>
  );
};
