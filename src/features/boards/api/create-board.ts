import { useMutation, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";

import { api } from "~/lib/api-client";
import type { MutationConfig } from "~/lib/react-query";

import { getBoardsQueryOptions } from "./get-boards";

export const createBoardInputSchema = z.object({
  name: z.string().min(1),
});

export type CreateBoardInput = z.infer<typeof createBoardInputSchema>;

const createBoard = ({
  organisationId,
  data,
}: {
  organisationId: string;
  data: CreateBoardInput;
}) => {
  return api.post(`/organisations/${organisationId}/boards`, data);
};

type UseCreateBoardOptions = MutationConfig<typeof createBoard>;

export const useCreateBoard = (options?: UseCreateBoardOptions) => {
  const queryClient = useQueryClient();

  return useMutation({
    ...options,
    mutationFn: createBoard,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(
        getBoardsQueryOptions(args[1].organisationId)
      );
      options?.onSuccess?.(...args);
    },
  });
};
