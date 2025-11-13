import { forwardRef } from "react";
import {
  Label,
  Input,
  Group,
  TextField,
  type TextFieldProps,
  NumberField,
  type NumberFieldProps,
  FieldError,
} from "react-aria-components";
import { useFormContext } from "react-hook-form";
import { MinusIcon, PlusIcon } from "lucide-react";

import { Button } from "~/components/ui/button";

import { cn } from "~/utils/cn";

import styles from "./input.module.css";

export type TextInputProps = Omit<TextFieldProps, "children" | "className"> & {
  className?: string;
  label?: string;
  placeholder?: string;
};

export const TextInput = forwardRef<HTMLDivElement, TextInputProps>(
  ({ className, name, label, placeholder, ...props }, ref) => {
    const form = useFormContext();

    return (
      <TextField
        name={name}
        className={cn(styles.field, className)}
        {...props}
        ref={ref}
      >
        <Label>{label}</Label>
        <Input
          className={styles.input}
          placeholder={placeholder}
          {...(name && form ? form?.register(name) : {})}
        />
        <FieldError className={styles.errorMessage} />
      </TextField>
    );
  }
);
TextInput.displayName = "TextInput";

export type NumberInputProps = Omit<
  NumberFieldProps,
  "children" | "className"
> & {
  className?: string;
  label?: string;
  placeholder?: string;
  withControls?: boolean;
};

export const NumberInput = forwardRef<HTMLDivElement, NumberInputProps>(
  ({ className, name, label, placeholder, withControls, ...props }, ref) => {
    const form = useFormContext();

    return (
      <NumberField
        name={name}
        className={cn(styles.field, className)}
        {...props}
        ref={ref}
      >
        <Label>{label}</Label>
        {withControls ? (
          <Group className={styles.inner}>
            <Button slot="increment">
              <PlusIcon />
            </Button>
            <Input
              className={styles.input}
              placeholder={placeholder}
              {...(name && form ? form?.register(name) : {})}
            />
            <Button
              variant="danger"
              slot="decrement"
            >
              <MinusIcon />
            </Button>
          </Group>
        ) : (
          <Input
            className={styles.input}
            placeholder={placeholder}
            {...(name && form ? form?.register(name) : {})}
          />
        )}
        <FieldError />
      </NumberField>
    );
  }
);
NumberInput.displayName = "NumberInput";
