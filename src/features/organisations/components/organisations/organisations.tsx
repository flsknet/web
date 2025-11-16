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

import { useOrganisations } from "~/features/organisations/api/get-organisations";
import { CreateOrganisation } from "~/features/organisations/components/create-organisation";

import styles from "./organisations.module.css";

export const Organisations = () => {
  const { data, isPending } = useOrganisations();

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
          <CreateOrganisation>
            <Button className={styles.create}>
              <PlusIcon />
            </Button>
          </CreateOrganisation>
        </TableColumn>
      </TableHead>
      <TableBody>
        {data!.map(({ id, name }) => (
          <TableRow key={id}>
            <TableCell>
              <Link
                className={styles.link}
                to="/organisations/$organisationId"
                params={{ organisationId: id }}
                key={id}
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
