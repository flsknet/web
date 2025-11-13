import { forwardRef } from "react";
import {
  Label,
  Slider as SliderPrimitive,
  type SliderProps as SliderPrimitiveProps,
  SliderOutput,
  SliderTrack,
  SliderThumb,
} from "react-aria-components";

import { cn } from "~/utils/cn";

import styles from "./slider.module.css";

export type SliderProps = Omit<
  SliderPrimitiveProps,
  "children" | "className"
> & {
  className?: string;
  label?: string;
};

export const Slider = forwardRef<HTMLDivElement, SliderProps>(
  ({ className, label, ...props }, ref) => {
    return (
      <SliderPrimitive
        {...props}
        className={cn(styles.slider, className)}
        ref={ref}
      >
        {label && (
          <div className={styles.output}>
            <Label>{label}</Label>
            <SliderOutput />
          </div>
        )}
        <SliderTrack className={styles.track}>
          <SliderThumb className={styles.thumb}>
            <div className={styles.innerThumb} />
          </SliderThumb>
        </SliderTrack>
      </SliderPrimitive>
    );
  }
);
Slider.displayName = "Slider";
