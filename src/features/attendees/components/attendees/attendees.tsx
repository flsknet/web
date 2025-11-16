import { useLingui } from "@lingui/react/macro";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHead,
  TableRow,
} from "~/components/ui/table";
import { User } from "~/features/users/components/user";
import { useAttendees } from "~/features/attendees/api/get-attendees";

import styles from "./attendees.module.css";

type AttendeesProps = {
  organisationId: string;
  eventId: string;
};

export const Attendees = ({ organisationId, eventId }: AttendeesProps) => {
  const { data, isPending } = useAttendees(organisationId, eventId);

  if (isPending) {
    return <>Loading</>;
  }

  return (
    <Table className={styles.table}>
      <TableHead>
        <TableColumn isRowHeader>Name</TableColumn>
      </TableHead>
      <TableBody>
        {data?.map(({ userId }) => (
          <TableRow key={userId}>
            <TableCell>
              <User userId={userId} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
