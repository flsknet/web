import type { ReactNode } from "react";
import { Navigate } from "@tanstack/react-router";

import { useSession } from "~/lib/auth";

import styles from "./auth-layout.module.css";

type AuthLayoutProps = {
  children?: ReactNode;
};

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  const session = useSession();

  if (session.isPending) {
    // TODO: Add loading ui.
    return <></>;
  }

  if (session.data) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>Flask</div>
      </header>
      <main className={styles.wrapper}>{children}</main>
    </>
  );
};
