import { useMutation, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";

import { api } from "~/lib/api-client";
import type { MutationConfig } from "~/lib/react-query";

import { getBoardsQueryOptions } from "./get-boards";

export const updateBoardInputSchema = z.object({
  name: z.string().min(1),
});

export type UpdateBoardInput = z.infer<typeof updateBoardInputSchema>;

const updateBoard = ({
  organisationId,
  boardId,
  data,
}: {
  organisationId: string;
  boardId: string;
  data: UpdateBoardInput;
}) => {
  return api.patch(`/organisations/${organisationId}/boards/${boardId}`, data);
};

type UseUpdateBoardOptions = MutationConfig<typeof updateBoard>;

export const useUpdateBoard = (options?: UseUpdateBoardOptions) => {
  const queryClient = useQueryClient();

  return useMutation({
    ...options,
    mutationFn: updateBoard,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(
        getBoardsQueryOptions(args[1].organisationId)
      );
      options?.onSuccess?.(...args);
    },
  });
};
