import { forwardRef } from "react";
import {
  Switch as SwitchPrimitive,
  type SwitchProps as SwitchPrimitiveProps,
} from "react-aria-components";

import { cn } from "~/utils/cn";

import styles from "./switch.module.css";

export type SwitchProps = Omit<
  SwitchPrimitiveProps,
  "className" | "children"
> & {
  className?: string;
  label?: string;
};

export const Switch = forwardRef<HTMLLabelElement, SwitchProps>(
  ({ className, label, ...props }, ref) => {
    return (
      <SwitchPrimitive
        {...props}
        className={cn(styles.switch, className)}
        ref={ref}
      >
        <div className={styles.indicator} />
        {label}
      </SwitchPrimitive>
    );
  }
);
Switch.displayName = "Switch";
