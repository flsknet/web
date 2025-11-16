import { createFileRoute } from "@tanstack/react-router";
import { useLingui } from "@lingui/react/macro";

import { ContentLayout } from "~/components/layouts/content-layout";
import { SignInForm } from "~/features/auth/components/sign-in-form";

export const Route = createFileRoute("/_auth/signin")({
  component: () => {
    const navigate = Route.useNavigate();
    const { t } = useLingui();

    return (
      <ContentLayout
        title={t`Sign in`}
        isCentered
      >
        <SignInForm onSuccess={() => navigate({ to: "/" })} />
      </ContentLayout>
    );
  },
});
