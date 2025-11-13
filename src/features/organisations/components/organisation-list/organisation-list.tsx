import { Link } from "@tanstack/react-router";

import { useOrganisations } from "~/features/organisations/api/get-organisations";

import styles from "./organisation-list.module.css";

export const OrganisationList = () => {
  const { data, isPending } = useOrganisations();

  if (isPending) {
    return <>Loading</>;
  }

  return (
    <div>
      {data?.map(({ id, name }) => (
        <Link
          to="/organisations/$organisationId"
          params={{ organisationId: id }}
          key={id}
        >
          <div>{name}</div>
        </Link>
      ))}
    </div>
  );
};
