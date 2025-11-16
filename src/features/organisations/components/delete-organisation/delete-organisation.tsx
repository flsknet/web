import type { ReactNode } from "react";
import { Trans, useLingui } from "@lingui/react/macro";

import { Modal, ModalTrigger } from "~/components/ui/modal";
import { Button } from "~/components/ui/button";

import { useDeleteOrganisation } from "~/features/organisations/api/delete-organisation";

type DeleteOrganisationProps = {
  organisationId: string;
  onSuccess?: () => void;
  children?: ReactNode;
};

export const DeleteOrganisation = ({
  organisationId,
  onSuccess,
  children,
}: DeleteOrganisationProps) => {
  const { t } = useLingui();

  const { mutate } = useDeleteOrganisation({ onSuccess });

  return (
    <ModalTrigger>
      {children}
      <Modal
        title={t`Delete organisation`}
        description={t`Are you sure you want to delete this organisation?`}
      >
        <Button
          onClick={() => mutate({ organisationId })}
          variant="danger"
        >
          <Trans>Delete</Trans>
        </Button>
        <Button
          variant="secondary"
          slot="close"
        >
          <Trans>Cancel</Trans>
        </Button>
      </Modal>
    </ModalTrigger>
  );
};
