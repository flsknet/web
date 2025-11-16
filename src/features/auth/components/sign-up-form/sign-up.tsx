import { Link } from "@tanstack/react-router";
import { useLingui, Trans } from "@lingui/react/macro";

import { Form } from "~/components/ui/form";
import { TextInput } from "~/components/ui/input";
import { Button } from "~/components/ui/button";

import { useSignUp, signUpInputSchema } from "~/features/auth/api/sign-up";

import styles from "./sign-up.module.css";

type SignUpFormProps = {
  onSuccess?: () => void;
};

export const SignUpForm = ({ onSuccess }: SignUpFormProps) => {
  const { t } = useLingui();
  const { mutate: signUp } = useSignUp({ onSuccess });

  return (
    <Form
      onSubmit={(data) => signUp({ data })}
      schema={signUpInputSchema}
    >
      <TextInput
        name="username"
        label={t`Username`}
        placeholder={t`John Doe`}
      />
      <TextInput
        name="email"
        label={t`Email`}
        placeholder={t`john.doe@mail.com`}
        type="email"
      />
      <TextInput
        name="password"
        label={t`Password`}
        placeholder={t`Enter your password.`}
        type="password"
      />
      <TextInput
        name="confirmPassword"
        label={t`Confirm password`}
        placeholder={t`Confirm your password.`}
        type="password"
      />
      <Button type="submit">
        <Trans>Sign up</Trans>
      </Button>
      <Link
        className={styles.link}
        to="/signin"
      >
        <Trans>Already have an account?</Trans>
      </Link>
    </Form>
  );
};
