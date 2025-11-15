import { createFileRoute } from "@tanstack/react-router";

import { ContentLayout } from "~/components/layouts/content-layout";
import { SignUpForm } from "~/features/auth/components/sign-up-form";

export const Route = createFileRoute("/_auth/signup")({
  component: () => {
    const navigate = Route.useNavigate();

    return (
      <ContentLayout
        title="Sign up"
        isCentered
      >
        <SignUpForm onSuccess={() => navigate({ to: "/" })} />
      </ContentLayout>
    );
  },
});
