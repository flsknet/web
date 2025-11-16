import { createFileRoute } from "@tanstack/react-router";
import { useLingui } from "@lingui/react/macro";

import { ContentLayout } from "~/components/layouts/content-layout";
import { SignUpForm } from "~/features/auth/components/sign-up-form";

export const Route = createFileRoute("/_auth/signup")({
  component: () => {
    const navigate = Route.useNavigate();
    const { t } = useLingui();

    return (
      <ContentLayout
        title={t`Sign up`}
        isCentered
      >
        <SignUpForm onSuccess={() => navigate({ to: "/" })} />
      </ContentLayout>
    );
  },
});
