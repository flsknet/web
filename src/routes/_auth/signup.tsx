import { createFileRoute } from "@tanstack/react-router";

import { SignUpForm } from "~/features/auth/components/sign-up-form";

export const Route = createFileRoute("/_auth/signup")({
  component: () => {
    const navigate = Route.useNavigate();

    return <SignUpForm onSuccess={() => navigate({ to: "/" })} />;
  },
});
