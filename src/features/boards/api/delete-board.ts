import { useMutation, useQueryClient } from "@tanstack/react-query";

import { api } from "~/lib/api-client";
import type { MutationConfig } from "~/lib/react-query";

import { getBoardsQueryOptions } from "./get-boards";

const deleteBoard = ({
  organisationId,
  boardId,
}: {
  organisationId: string;
  boardId: string;
}) => {
  return api.delete(`/organisations/${organisationId}/boards/${boardId}`);
};

type UseDeleteBoardOptions = MutationConfig<typeof deleteBoard>;

export const useDeleteBoard = (options?: UseDeleteBoardOptions) => {
  const queryClient = useQueryClient();

  return useMutation({
    ...options,
    mutationFn: deleteBoard,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(
        getBoardsQueryOptions(args[1].organisationId)
      );
      options?.onSuccess?.(...args);
    },
  });
};
