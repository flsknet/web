import { useState, useCallback } from "react";

export const useDisclosure = (initialState?: boolean) => {
  const [isOpen, setIsOpen] = useState(initialState || false);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return [isOpen, { open, close, toggle }] as const;
};
