import type { ReactNode } from "react";
import { useLingui, Trans } from "@lingui/react/macro";

import { Button } from "~/components/ui/button";
import { Modal, ModalTrigger } from "~/components/ui/modal";

import { useDeleteUser } from "~/features/users/api/delete-user";

type DeleteUserProps = {
  children?: ReactNode;
};

export const DeleteUser = ({ children }: DeleteUserProps) => {
  const { t } = useLingui();

  const { mutate } = useDeleteUser();

  return (
    <ModalTrigger>
      {children}
      <Modal
        title={t`Delete account`}
        description={t`Are you sure you want to delete your account?`}
      >
        <Button
          variant="danger"
          onClick={() => mutate(undefined)}
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
