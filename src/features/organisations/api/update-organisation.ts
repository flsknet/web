import { useMutation, useQueryClient } from "@tanstack/react-query";
import z from "zod";

import { api } from "~/lib/api-client";
import type { MutationConfig } from "~/lib/react-query";

import { getOrganisationsQueryOptions } from "./get-organisations";

export const updateOrganisationInputSchema = z.object({
  name: z.string().min(1),
});

export type UpdateOrganisationInput = z.infer<
  typeof updateOrganisationInputSchema
>;

const updateOrganisation = ({
  organisationId,
  data,
}: {
  organisationId: string;
  data: UpdateOrganisationInput;
}) => {
  return api.patch(`/organisations/${organisationId}`, data);
};

type UseUpdateOrganisationOptions = MutationConfig<typeof updateOrganisation>;

export const useUpdateOrganisation = (
  options?: UseUpdateOrganisationOptions
) => {
  const queryClient = useQueryClient();

  return useMutation({
    ...options,
    mutationFn: updateOrganisation,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(getOrganisationsQueryOptions());
      options?.onSuccess?.(...args);
    },
  });
};
