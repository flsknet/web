import { useEffect, type ReactNode } from "react";
import { Link, Navigate } from "@tanstack/react-router";
import { Building2Icon, HomeIcon, MenuIcon, SettingsIcon } from "lucide-react";

import { useSession } from "~/lib/auth";

import styles from "./app-layout.module.css";
import { Button } from "~/components/ui/button";
import { useDisclosure } from "~/hooks/use-disclosure";
import { useIsMobile } from "~/hooks/use-is-mobile";

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

  const isMobile = useIsMobile();
  const [isOpen, { toggle, close }] = useDisclosure();

  useEffect(() => {
    if (!isMobile) {
      close();
    }
  }, [isMobile]);

  if (session.isPending) {
    // TODO: Add loading ui.
    return <></>;
  }

  if (!session.data) {
    return <Navigate to="/signin" />;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.topbar}>
          Flask
          <Button onClick={toggle}>
            <MenuIcon />
          </Button>
        </div>
        <nav
          className={styles.navbar}
          data-open={isOpen}
        >
          <div>
            {NAVBAR_LINKS.map(({ icon, to, label }) => (
              <Link
                className={styles.navbarLink}
                activeProps={{ className: styles.navbarLinkActive }}
                onClick={close}
                to={to}
                key={to}
              >
                {icon}
                {label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
      <nav className={styles.sidebar}>
        {NAVBAR_LINKS.map(({ icon, to }) => (
          <Link
            className={styles.sidebarLink}
            activeProps={{ className: styles.sidebarLinkActive }}
            to={to}
            key={to}
          >
            {icon}
          </Link>
        ))}
      </nav>
      {children}
    </div>
  );
};
