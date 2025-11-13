import { useMutation } from "@tanstack/react-query";

import { auth } from "~/lib/auth";
import type { MutationConfig } from "~/lib/react-query";

const signOut = () => auth.signOut();

type UseSignOutOptions = MutationConfig<typeof signOut>;

export const useSignOut = (options?: UseSignOutOptions) => {
  return useMutation({
    ...options,
    mutationFn: signOut,
  });
};
