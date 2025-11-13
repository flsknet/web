import { forwardRef, type ReactNode, type ElementRef } from "react";
import {
  Button as ButtonPrimitive,
  type ButtonProps as ButtonPrimitiveProps,
} from "react-aria-components";
import { cva, type VariantProps } from "class-variance-authority";

import styles from "./button.module.css";

const buttonVariants = cva(styles.button, {
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

export type ButtonProps = Omit<
  ButtonPrimitiveProps,
  "children" | "className"
> & {
  children?: ReactNode;
  className?: string;
} & VariantProps<typeof buttonVariants>;

export const Button = forwardRef<
  ElementRef<typeof ButtonPrimitive>,
  ButtonProps
>(({ className, variant, ...props }, ref) => {
  return (
    <ButtonPrimitive
      {...props}
      className={buttonVariants({ className, variant })}
      ref={ref}
    />
  );
});
Button.displayName = "Button";
