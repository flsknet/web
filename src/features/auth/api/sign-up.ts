import { useMutation } from "@tanstack/react-query";
import z from "zod";

import { auth } from "~/lib/auth";
import type { MutationConfig } from "~/lib/react-query";

export const signUpInputSchema = z
  .object({
    username: z.string().min(4),
    email: z.email().min(1),
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
  })
  .refine((data) => data.password == data.confirmPassword);

export type SignUpInput = z.infer<typeof signUpInputSchema>;

const signUp = ({ data }: { data: SignUpInput }) => {
  return auth.signUp.email({
    name: data.username,
    email: data.email,
    password: data.password,
  });
};

type UseSignUpOptions = MutationConfig<typeof signUp>;

export const useSignUp = (options?: UseSignUpOptions) => {
  return useMutation({
    ...options,
    mutationFn: signUp,
  });
};
