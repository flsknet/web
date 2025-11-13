import type { ReactNode } from "react";

import styles from "./page.module.css";

type PageProps = {
  children?: ReactNode;
  centered?: boolean;
};

export const Page = ({ children, centered }: PageProps) => {
  return (
    <main
      className={styles.wrapper}
      data-centered={centered}
    >
      {children}
    </main>
  );
};
