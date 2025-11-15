import { ComponentProps } from "react";
import { cn } from "~/utils/cn";

import styles from "./content-layout.module.css";

type ContentLayoutProps = ComponentProps<"div"> & {
  title?: string;
  isCentered?: boolean;
};

export const ContentLayout = ({
  children,
  className,
  title,
  isCentered,
  ...props
}: ContentLayoutProps) => {
  return (
    <main
      className={cn(styles.wrapper, className)}
      data-centered={isCentered}
      {...props}
    >
      <div className={styles.inner}>
        {title ? <h1>{title}</h1> : null}
        {children}
      </div>
    </main>
  );
};
