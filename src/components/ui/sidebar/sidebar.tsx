import type { ReactNode } from "react";
import { Link, type LinkComponentProps } from "@tanstack/react-router";

import { cn } from "~/utils/cn";

import styles from "./sidebar.module.css";

type SidebarProviderProps = {
  children?: ReactNode;
};

export const SidebarProvider = ({ children }: SidebarProviderProps) => {
  return <div className={styles.wrapper}>{children}</div>;
};

type SidebarHeaderProps = {
  children?: ReactNode;
};

export const SidebarHeader = ({ children }: SidebarHeaderProps) => {
  return <header className={styles.sidebarHeader}>{children}</header>;
};

type SidebarProps = {
  children?: ReactNode;
};

export const Sidebar = ({ children }: SidebarProps) => {
  return <aside className={styles.sidebar}>{children}</aside>;
};

type SidebarLinkProps = LinkComponentProps;

export const SidebarLink = ({ className, ...props }: SidebarLinkProps) => {
  return (
    <Link
      className={cn(styles.sidebarLink, className)}
      activeProps={{ className: styles.active }}
      {...props}
    />
  );
};
