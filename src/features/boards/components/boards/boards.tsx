import { Link } from "@tanstack/react-router";
import { useBoards } from "../../api/get-boards";
import { CreateBoard } from "../create-board";

import styles from "./boards.module.css";

type BoardsProps = {
  organisationId: string;
};

export const Boards = ({ organisationId }: BoardsProps) => {
  const { data } = useBoards(organisationId);

  return (
    <div className={styles.list}>
      {data?.map(({ id, name }) => (
        <Link
          to="/organisations/$organisationId/boards/$boardId"
          params={{ organisationId, boardId: id }}
        >
          <span>{name}</span>
        </Link>
      ))}
      <CreateBoard organisationId={organisationId} />
    </div>
  );
};
