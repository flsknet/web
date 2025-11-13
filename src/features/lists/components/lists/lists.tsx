import { DndContext, DragEndEvent } from "@dnd-kit/core";

import { Droppable } from "~/components/ui/draggable";

import { Tasks } from "~/features/tasks/components/tasks";
import { useUpdateTask } from "~/features/tasks/api/update-task";

import { useLists } from "~/features/lists/api/get-lists";
import { CreateList } from "~/features/lists/components/create-list";
import { DeleteList } from "~/features/lists/components/delete-list";

import styles from "./lists.module.css";

type ListsProps = {
  organisationId: string;
  boardId: string;
};

export const Lists = ({ organisationId, boardId }: ListsProps) => {
  const { data } = useLists(organisationId, boardId);

  const { mutate } = useUpdateTask();

  const handleDragEnd = (event: DragEndEvent) => {
    const { collisions, active } = event;

    if (collisions) {
      const list = collisions[0];

      const listId = list.id == "uncategorised" ? null : (list.id as string);

      mutate({
        organisationId,
        boardId,
        taskId: active.id as string,
        data: {
          listId,
        },
      });
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className={styles.wrapper}>
        <Droppable
          className={styles.list}
          id="uncategorised"
        >
          <div className={styles.listHeader}>
            <span className={styles.listName}>Uncategorised</span>
          </div>
          <Tasks
            organisationId={organisationId}
            boardId={boardId}
          />
        </Droppable>
        {data?.map(({ id, name }) => (
          <Droppable
            className={styles.list}
            id={id}
          >
            <div className={styles.listHeader}>
              <span className={styles.listName}>{name}</span>
              <DeleteList
                organisationId={organisationId}
                boardId={boardId}
                listId={id}
              />
            </div>
            <Tasks
              organisationId={organisationId}
              boardId={boardId}
              listId={id}
            />
          </Droppable>
        ))}
        <CreateList
          organisationId={organisationId}
          boardId={boardId}
        />
      </div>
    </DndContext>
  );
};
