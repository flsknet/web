import { Trash2Icon } from "lucide-react";

import { useDeleteList } from "~/features/lists/api/delete-list";

import { Button } from "~/components/ui/button";

type DeleteListProps = {
  organisationId: string;
  boardId: string;
  listId: string;
};

export const DeleteList = ({
  organisationId,
  boardId,
  listId,
}: DeleteListProps) => {
  const { mutate } = useDeleteList();

  return (
    <Button
      variant="danger"
      onClick={() => mutate({ organisationId, boardId, listId })}
    >
      <Trash2Icon size={16} />
    </Button>
  );
};
