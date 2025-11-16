import { Link } from "@tanstack/react-router";
import { Trans } from "@lingui/react/macro";
import { PlusIcon } from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHead,
  TableRow,
} from "~/components/ui/table";
import { Button } from "~/components/ui/button";

import { useEvents } from "~/features/events/api/get-events";
import { CreateEvent } from "~/features/events/components/create-event";

import styles from "./events.module.css";

type EventsProps = {
  organisationId: string;
};

export const Events = ({ organisationId }: EventsProps) => {
  const { data } = useEvents(organisationId);

  return (
    <Table className={styles.table}>
      <TableHead>
        <TableColumn isRowHeader>
          <Trans>Name</Trans>
        </TableColumn>
        <TableColumn>
          <Trans>Description</Trans>
        </TableColumn>
        <TableColumn>
          <CreateEvent organisationId={organisationId}>
            <Button className={styles.create}>
              <PlusIcon />
            </Button>
          </CreateEvent>
        </TableColumn>
      </TableHead>
      <TableBody>
        {data?.map(({ id, name, description }) => (
          <TableRow>
            <TableCell>
              <Link
                className={styles.link}
                to="/organisations/$organisationId/events/$eventId"
                params={{ organisationId, eventId: id }}
                key={id}
              >
                {name}
              </Link>
            </TableCell>
            <TableCell className={styles.description}>{description}</TableCell>
            <TableCell />
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
