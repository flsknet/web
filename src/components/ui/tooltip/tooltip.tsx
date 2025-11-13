import { type ReactNode } from "react";
import {
  Tooltip as TooltipPrimitive,
  TooltipTrigger as TooltipTriggerPrimitive,
} from "react-aria-components";

import styles from "./tooltip.module.css";

export const TOOLTIP_DELAY = 500;
export const TOOLTIP_CLOSE_DELAY = 0;

export type TooltipProps = {
  children?: ReactNode;
  label?: string;
};

export const Tooltip = ({ children, label }: TooltipProps) => {
  return (
    <TooltipTriggerPrimitive
      delay={TOOLTIP_DELAY}
      closeDelay={TOOLTIP_CLOSE_DELAY}
    >
      {children}
      <TooltipPrimitive className={styles.tooltip}>{label}</TooltipPrimitive>
    </TooltipTriggerPrimitive>
  );
};
