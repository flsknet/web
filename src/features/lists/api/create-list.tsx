import { useMutation, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";

import { api } from "~/lib/api-client";
import type { MutationConfig } from "~/lib/react-query";

import { getListsQueryOptions } from "./get-lists";

export const createListInputSchema = z.object({
  name: z.string().min(1),
});

export type CreateListInput = z.infer<typeof createListInputSchema>;

const createList = ({
  organisationId,
  boardId,
  data,
}: {
  organisationId: string;
  boardId: string;
  data: CreateListInput;
}) => {
  return api.post(
    `/organisations/${organisationId}/boards/${boardId}/lists`,
    data
  );
};

type UseCreateListOptions = MutationConfig<typeof createList>;

export const useCreateList = (options?: UseCreateListOptions) => {
  const queryClient = useQueryClient();

  return useMutation({
    ...options,
    mutationFn: createList,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(
        getListsQueryOptions(args[1].organisationId, args[1].boardId)
      );
      options?.onSuccess?.(...args);
    },
  });
};
