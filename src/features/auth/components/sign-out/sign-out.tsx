import { Trans } from "@lingui/react/macro";

import { Button } from "~/components/ui/button";

import { useSignOut } from "~/features/auth/api/sign-out";

export const SignOut = () => {
  const { mutate } = useSignOut();

  return (
    <Button
      onClick={() => mutate(undefined)}
      variant="secondary"
    >
      <Trans>Sign out</Trans>
    </Button>
  );
};
