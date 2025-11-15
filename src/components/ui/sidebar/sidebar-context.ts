import { createContext } from "react";

export const SidebarContext = createContext<{
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
}>({} as any);
