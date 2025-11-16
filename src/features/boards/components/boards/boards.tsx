import { Link } from "@tanstack/react-router";
import { Trans } from "@lingui/react/macro";

import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHead,
  TableRow,
} from "~/components/ui/table";

import { useBoards } from "~/features/boards/api/get-boards";

import styles from "./boards.module.css";
import { CreateBoard } from "../create-board";
import { Button } from "~/components/ui/button";
import { PlusIcon } from "lucide-react";

type BoardsProps = {
  organisationId: string;
};

export const Boards = ({ organisationId }: BoardsProps) => {
  const { data } = useBoards(organisationId);

  return (
    <Table>
      <TableHead>
        <TableColumn isRowHeader>
          <Trans>Name</Trans>
        </TableColumn>
        <TableColumn>
          <CreateBoard organisationId={organisationId}>
            <Button className={styles.create}>
              <PlusIcon />
            </Button>
          </CreateBoard>
        </TableColumn>
      </TableHead>
      <TableBody>
        {data?.map(({ id, name }) => (
          <TableRow key={id}>
            <TableCell>
              <Link
                className={styles.link}
                to="/organisations/$organisationId/boards/$boardId"
                params={{ organisationId, boardId: id }}
              >
                {name}
              </Link>
            </TableCell>
            <TableCell />
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
