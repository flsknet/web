import {
  type QueryOptions,
  type MutationOptions,
  QueryClient,
} from "@tanstack/react-query";

export type QueryConfig<TQueryFn extends (...args: any[]) => any> = Omit<
  QueryOptions<
    Awaited<ReturnType<TQueryFn>>,
    Error,
    Awaited<ReturnType<TQueryFn>>,
    string[]
  >,
  "queryKey" | "queryFn"
>;

export type MutationConfig<TMutationFn extends (...args: any[]) => any> = Omit<
  MutationOptions<
    Awaited<ReturnType<TMutationFn>>,
    Error,
    Parameters<TMutationFn>[0],
    string[]
  >,
  "mutationFn"
>;

export const queryClient = new QueryClient();
