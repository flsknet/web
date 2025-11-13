import { forwardRef, type ReactNode } from "react";
import {
  Checkbox as CheckboxPrimitive,
  CheckboxProps as CheckboxPrimitiveProps,
} from "react-aria-components";
import { cva, type VariantProps } from "class-variance-authority";
import { CheckIcon } from "lucide-react";

import styles from "./checkbox.module.css";

const checkboxVariants = cva(styles.checkbox, {
  variants: {
    variant: {
      default: styles.primary,
      secondary: styles.secondary,
      danger: styles.danger,
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const CHECKBOX_ICON_SIZE = 14;
const CHECKBOX_ICON_STROKE_WIDTH = 4;

export type CheckboxProps = Omit<
  CheckboxPrimitiveProps,
  "children" | "className"
> & {
  children?: ReactNode;
  className?: string;
} & VariantProps<typeof checkboxVariants>;

export const Checkbox = forwardRef<HTMLLabelElement, CheckboxProps>(
  ({ children, className, variant, ...props }, ref) => {
    return (
      <CheckboxPrimitive
        {...props}
        className={checkboxVariants({ className, variant })}
        ref={ref}
      >
        <div className={styles.inner}>
          <CheckIcon
            className={styles.icon}
            size={CHECKBOX_ICON_SIZE}
            strokeWidth={CHECKBOX_ICON_STROKE_WIDTH}
          />
        </div>
        {children}
      </CheckboxPrimitive>
    );
  }
);
Checkbox.displayName = "Checkbox";
