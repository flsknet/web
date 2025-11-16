import { useMutation, useQueryClient } from "@tanstack/react-query";
import z from "zod";

import { auth } from "~/lib/auth";
import type { MutationConfig } from "~/lib/react-query";

import { getUserQueryOptions } from "./get-user";

export const updateUserInputSchema = z.object({
  name: z.string().min(4),
});

export type UpdateUserInput = z.infer<typeof updateUserInputSchema>;

const updateUser = ({ data }: { data: UpdateUserInput }) => {
  return auth.updateUser(data);
};

type UseUpdateUserOptions = MutationConfig<typeof updateUser>;

export const useUpdateUser = (options?: UseUpdateUserOptions) => {
  const queryClient = useQueryClient();

  return useMutation({
    ...options,
    mutationFn: updateUser,
    onSuccess: (...args) => {
      auth.getSession().then(({ data }) => {
        queryClient.invalidateQueries(getUserQueryOptions(data!.user.id));
      });
      options?.onSuccess?.(...args);
    },
  });
};
