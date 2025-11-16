import { useMutation } from "@tanstack/react-query";

import { auth } from "~/lib/auth";
import type { MutationConfig } from "~/lib/react-query";

const deleteUser = async () => auth.deleteUser();

type UseDeleteUserOptions = MutationConfig<typeof deleteUser>;

export const useDeleteUser = (options?: UseDeleteUserOptions) => {
  return useMutation({
    ...options,
    mutationFn: deleteUser,
  });
};
