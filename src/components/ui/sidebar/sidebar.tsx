import { useContext, type ReactNode } from "react";
import { Link, type LinkComponentProps } from "@tanstack/react-router";

import { cn } from "~/utils/cn";

import styles from "./sidebar.module.css";
import { SidebarContext } from "./sidebar-context";
import { useDisclosure } from "~/hooks/use-disclosure";
import { Button } from "../button";

type SidebarProviderProps = {
  children?: ReactNode;
};

export const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const [isOpen, { open, close, toggle }] = useDisclosure();

  return (
    <SidebarContext.Provider value={{ isOpen, open, close, toggle }}>
      <div className={styles.wrapper}>{children}</div>
    </SidebarContext.Provider>
  );
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
  const { isOpen } = useContext(SidebarContext);

  return (
    <aside
      className={styles.sidebar}
      data-open={isOpen}
    >
      {children}
    </aside>
  );
};

type SidebarLinkProps = LinkComponentProps;

export const SidebarLink = ({ className, ...props }: SidebarLinkProps) => {
  const { close } = useContext(SidebarContext);

  return (
    <Link
      className={cn(styles.sidebarLink, className)}
      activeProps={{ className: styles.active }}
      onClick={close}
      {...props}
    />
  );
};

type SidebarTriggerProps = {};

export const SidebarTrigger = () => {
  const { toggle } = useContext(SidebarContext);

  return <Button onClick={toggle}>toggle</Button>;
};
