import { useLingui } from "@lingui/react/macro";

import {
  Table,
  TableHead,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "~/components/ui/table";

import { useMembers } from "../../api/get-members";
import { User } from "~/features/users/components/user";

import styles from "./members.module.css";

type MembersProps = {
  organisationId: string;
};

export const Members = ({ organisationId }: MembersProps) => {
  const { i18n } = useLingui();
  const { data, isPending } = useMembers(organisationId);

  if (isPending) {
    return <>Loading</>;
  }

  return (
    <Table className={styles.table}>
      <TableHead>
        <TableColumn>Name</TableColumn>
        <TableColumn>Role</TableColumn>
        <TableColumn>Joined at</TableColumn>
      </TableHead>
      <TableBody>
        {data?.map(({ userId, role, joinedAt }) => (
          <TableRow key={userId}>
            <TableCell>
              <User userId={userId} />
            </TableCell>
            <TableCell>{role}</TableCell>
            <TableCell>{i18n.date(joinedAt)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
