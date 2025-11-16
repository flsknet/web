import { createFileRoute } from "@tanstack/react-router";
import { Trans, useLingui } from "@lingui/react/macro";

import { ContentLayout } from "~/components/layouts/content-layout";
import { Button } from "~/components/ui/button";

import { DeleteUser } from "~/features/users/components/delete-user";
import { UpdateUser } from "~/features/users/components/update-user";
import { SignOut } from "~/features/auth/components/sign-out";

export const Route = createFileRoute("/_app/settings/account")({
  component: () => {
    const { t } = useLingui();

    return (
      <ContentLayout title={t`Account`}>
        <UpdateUser />
        <SignOut />
        <DeleteUser>
          <Button variant="danger">
            <Trans>Delete account</Trans>
          </Button>
        </DeleteUser>
      </ContentLayout>
    );
  },
});
