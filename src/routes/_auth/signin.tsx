import { createFileRoute } from "@tanstack/react-router";

import { ContentLayout } from "~/components/layouts/content-layout";
import { SignInForm } from "~/features/auth/components/sign-in-form";

export const Route = createFileRoute("/_auth/signin")({
  component: () => {
    const navigate = Route.useNavigate();

    return (
      <ContentLayout
        title="Sign in"
        isCentered
      >
        <SignInForm onSuccess={() => navigate({ to: "/" })} />
      </ContentLayout>
    );
  },
});
