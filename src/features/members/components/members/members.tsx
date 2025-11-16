import { useLingui, Trans } from "@lingui/react/macro";

import {
  Table,
  TableHead,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "~/components/ui/table";

import { useMembers } from "~/features/members/api/get-members";
import { User } from "~/features/users/components/user";

type MembersProps = {
  organisationId: string;
};

export const Members = ({ organisationId }: MembersProps) => {
  const { i18n } = useLingui();

  const { data, isPending } = useMembers(organisationId);

  if (isPending) {
    return <></>;
  }

  return (
    <Table>
      <TableHead>
        <TableColumn isRowHeader>
          <Trans>Name</Trans>
        </TableColumn>
        <TableColumn>
          <Trans>Role</Trans>
        </TableColumn>
        <TableColumn>
          <Trans>Joined at</Trans>
        </TableColumn>
      </TableHead>
      <TableBody>
        {data!.map(({ userId, role, joinedAt }) => (
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
