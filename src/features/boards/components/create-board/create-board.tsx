import { Form } from "~/components/ui/form";
import { TextInput } from "~/components/ui/input";
import { Button } from "~/components/ui/button";

import {
  createBoardInputSchema,
  useCreateBoard,
} from "~/features/boards/api/create-board";

type CreateBoardProps = {
  organisationId: string;
};

export const CreateBoard = ({ organisationId }: CreateBoardProps) => {
  const { mutate } = useCreateBoard();

  return (
    <Form
      onSubmit={(data) => mutate({ organisationId, data })}
      schema={createBoardInputSchema}
    >
      <h1>Create a board</h1>
      <TextInput
        name="name"
        label="Board name"
        placeholder="Project 1"
      />
      <Button type="submit">Create</Button>
    </Form>
  );
};
