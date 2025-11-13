import {
  Form as FormPrimitive,
  type FormProps as FormPrimitiveProps,
} from "react-aria-components";
import {
  FormProvider,
  useForm,
  type UseFormProps,
  type SubmitHandler,
  type FieldValues,
  type FieldErrors,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z, { type ZodObject } from "zod";

import { cn } from "~/utils/cn";

import styles from "./form.module.css";

/**
 * Parses **React Hook Form** errors into a format that can be
 * used by a **React Aria** Form's ```validationErrors``` prop.
 * @param errors The ```formState.errors``` object you want to parse.
 * @returns Object that maps each field name to an error message string.
 */
const parseFormErrors = <TFieldValues extends FieldValues>(
  errors: FieldErrors<TFieldValues>
) => {
  const messages: { [key: string]: string } = {};
  Object.entries(errors).forEach(([key, error]) => {
    messages[key] = `${error?.message}`;
  });
  return messages as { [key in keyof TFieldValues]: string };
};

type FormProps<TSchema extends ZodObject> = Omit<
  FormPrimitiveProps,
  "onSubmit"
> & {
  options?: Omit<
    UseFormProps<z.input<TSchema>, any, z.output<TSchema>>,
    "resolver"
  >;
  schema?: TSchema;
  onSubmit?: SubmitHandler<z.infer<TSchema>>;
};

export const Form = <TSchema extends ZodObject>({
  options,
  schema,
  onSubmit,
  className,
  ...props
}: FormProps<TSchema>) => {
  const form = useForm({
    ...options,
    resolver: schema && zodResolver(schema),
  });

  return (
    <FormProvider {...form}>
      <FormPrimitive
        validationBehavior="aria"
        validationErrors={parseFormErrors(form.formState.errors)}
        onSubmit={onSubmit && form.handleSubmit(onSubmit)}
        className={cn(styles.form, className)}
        {...props}
      />
    </FormProvider>
  );
};
