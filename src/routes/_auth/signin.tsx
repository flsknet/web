import { createFileRoute } from "@tanstack/react-router";

import { SignInForm } from "~/features/auth/components/sign-in-form";

export const Route = createFileRoute("/_auth/signin")({
  component: () => {
    const navigate = Route.useNavigate();

    return <SignInForm onSuccess={() => navigate({ to: "/" })} />;
  },
});
