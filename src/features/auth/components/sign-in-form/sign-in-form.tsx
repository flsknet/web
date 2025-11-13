import { Link } from "@tanstack/react-router";
import { useLingui, Trans } from "@lingui/react/macro";

import { Form } from "~/components/ui/form";
import { TextInput } from "~/components/ui/input";
import { Button } from "~/components/ui/button";

import { useSignIn, signInInputSchema } from "~/features/auth/api/sign-in";

import styles from "./sign-in-form.module.css";

type SignInFormProps = {
  onSuccess?: () => void;
};

export const SignInForm = ({ onSuccess }: SignInFormProps) => {
  const { t } = useLingui();
  const { mutate: signIn } = useSignIn({ onSuccess });

  return (
    <Form
      onSubmit={(data) => signIn({ data })}
      schema={signInInputSchema}
    >
      <h1>
        <Trans>Sign in</Trans>
      </h1>
      <TextInput
        name="email"
        label="Email"
        placeholder={t`john.doe@mail.com`}
        type="email"
      />
      <TextInput
        name="password"
        label="Password"
        placeholder={t`Enter your password.`}
        type="password"
      />
      <Button type="submit">
        <Trans>Sign in</Trans>
      </Button>
      <Link
        className={styles.link}
        to="/signup"
      >
        <Trans>Don't have an account?</Trans>
      </Link>
    </Form>
  );
};
