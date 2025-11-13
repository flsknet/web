import { useMemo } from "react";

import { Draggable } from "~/components/ui/draggable";

import { useTasks } from "~/features/tasks/api/get-tasks";
import { CreateTask } from "~/features/tasks/components/create-task";

import styles from "./tasks.module.css";

type TasksProps = {
  organisationId: string;
  boardId: string;
  listId?: string;
};

export const Tasks = ({ organisationId, boardId, listId }: TasksProps) => {
  const { data } = useTasks(organisationId, boardId);

  const filtered = useMemo(() => {
    return data?.filter((task) => task.listId == listId);
  }, [data, listId]);

  return (
    <>
      {filtered?.map(({ id, title, description }) => (
        <Draggable
          className={styles.task}
          id={id}
          key={id}
        >
          <div>{title}</div>
          <div className={styles.taskDescription}>{description}</div>
        </Draggable>
      ))}
      <CreateTask
        organisationId={organisationId}
        boardId={boardId}
        listId={listId}
      />
    </>
  );
};
