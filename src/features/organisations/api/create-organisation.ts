import { useMutation, useQueryClient } from "@tanstack/react-query";
import z from "zod";

import { api } from "~/lib/api-client";
import type { MutationConfig } from "~/lib/react-query";

import { getOrganisationsQueryOptions } from "./get-organisations";

export const createOrganisationInputSchema = z.object({
  name: z.string().min(1),
});

export type CreateOrganisationInput = z.infer<
  typeof createOrganisationInputSchema
>;

const createOrganisation = ({ data }: { data: CreateOrganisationInput }) => {
  return api.post("/organisations", data);
};

type UseCreateOrganisationOptions = MutationConfig<typeof createOrganisation>;

export const useCreateOrganisation = (
  options?: UseCreateOrganisationOptions
) => {
  const queryClient = useQueryClient();

  return useMutation({
    ...options,
    mutationFn: createOrganisation,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(getOrganisationsQueryOptions());
      options?.onSuccess?.(...args);
    },
  });
};
