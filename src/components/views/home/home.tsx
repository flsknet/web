import { useNavigate } from "@tanstack/react-router";

import { Button } from "~/components/ui/button";

import styles from "./home.module.css";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <div>
        <h1 className={styles.logo}>Welcome to Flask</h1>
        <p>
          A free and open-source organisation management platform for anybody.
        </p>
      </div>
      <div className={styles.inner}>
        <Button onClick={() => navigate({ to: "/organisations" })}>
          Get started
        </Button>
        <Button
          onClick={() => navigate({ to: "/settings" })}
          variant="secondary"
        >
          Open settings
        </Button>
      </div>
    </div>
  );
};
