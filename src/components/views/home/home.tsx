import { useNavigate } from "@tanstack/react-router";
import { Trans } from "@lingui/react/macro";

import { Button } from "~/components/ui/button";

import styles from "./home.module.css";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <div>
        <h1 className={styles.logo}>
          <Trans>Welcome to Flask</Trans>
        </h1>
        <p>
          <Trans>
            A free and open-source organisation management platform for anybody.
          </Trans>
        </p>
      </div>
      <div className={styles.inner}>
        <Button onClick={() => navigate({ to: "/organisations" })}>
          <Trans>Get started</Trans>
        </Button>
        <Button
          onClick={() => navigate({ to: "/settings" })}
          variant="secondary"
        >
          <Trans>Open settings</Trans>
        </Button>
      </div>
    </div>
  );
};
