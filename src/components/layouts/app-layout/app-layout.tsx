import type { ReactNode } from "react";
import { Link, Navigate } from "@tanstack/react-router";
import { Building2Icon, HomeIcon, SettingsIcon } from "lucide-react";

import { useSession } from "~/lib/auth";

import styles from "./app-layout.module.css";

const NAVBAR_LINKS = [
  {
    to: "/",
    icon: <HomeIcon size={24} />,
    label: "Home",
  },
  {
    to: "/organisations",
    icon: <Building2Icon size={24} />,
    label: "Organisations",
  },
  {
    to: "/settings",
    icon: <SettingsIcon size={24} />,
    label: "Settings",
  },
];

type AppLayoutProps = {
  children?: ReactNode;
};

export const AppLayout = ({ children }: AppLayoutProps) => {
  const session = useSession();

  if (session.isPending) {
    // TODO: Add loading ui.
    return <></>;
  }

  if (!session.data) {
    return <Navigate to="/signin" />;
  }

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.topbar}>Flask</div>
        <nav className={styles.navbar}>
          {NAVBAR_LINKS.map(({ icon, to, label }) => (
            <Link
              className={styles.navbarLink}
              to={to}
            >
              {icon}
              {label}
            </Link>
          ))}
        </nav>
      </header>
      <nav className={styles.sidebar}>
        {NAVBAR_LINKS.map(({ icon, to }) => (
          <Link
            className={styles.sidebarLink}
            to={to}
          >
            {icon}
          </Link>
        ))}
      </nav>
      {children}
    </div>
  );
};
