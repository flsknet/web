import { Form } from "~/components/ui/form";
import { Button } from "~/components/ui/button";

import { useDeleteTask } from "~/features/tasks/api/delete-task";

type DeleteTaskProps = {
  organisationId: string;
  boardId: string;
  taskId: string;
};

export const DeleteTask = ({
  organisationId,
  boardId,
  taskId,
}: DeleteTaskProps) => {
  const { mutate } = useDeleteTask();

  <Form onSubmit={() => mutate({ organisationId, boardId, taskId })}>
    <Button type="submit">Delete</Button>
  </Form>;
};
