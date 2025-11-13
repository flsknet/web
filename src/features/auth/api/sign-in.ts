import { useMutation } from "@tanstack/react-query";
import z from "zod";

import { auth } from "~/lib/auth";
import type { MutationConfig } from "~/lib/react-query";

export const signInInputSchema = z.object({
  email: z.email().min(1),
  password: z.string().min(1),
});

export type SignInInput = z.infer<typeof signInInputSchema>;

const signIn = ({ data }: { data: SignInInput }) => {
  return auth.signIn.email(data);
};

type UseSignInOptions = MutationConfig<typeof signIn>;

export const useSignIn = (options?: UseSignInOptions) => {
  return useMutation({
    ...options,
    mutationFn: signIn,
  });
};
