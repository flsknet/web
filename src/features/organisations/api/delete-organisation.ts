import { useMutation, useQueryClient } from "@tanstack/react-query";

import { api } from "~/lib/api-client";
import type { MutationConfig } from "~/lib/react-query";

import { getOrganisationsQueryOptions } from "./get-organisations";

const deleteOrganisation = ({ organisationId }: { organisationId: string }) => {
  return api.delete(`/organisations/${organisationId}`);
};

type UseDeleteOrganisationOptions = MutationConfig<typeof deleteOrganisation>;

export const useDeleteOrganisation = (
  options?: UseDeleteOrganisationOptions
) => {
  const queryClient = useQueryClient();

  return useMutation({
    ...options,
    mutationFn: deleteOrganisation,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(getOrganisationsQueryOptions());
      options?.onSuccess?.(...args);
    },
  });
};
