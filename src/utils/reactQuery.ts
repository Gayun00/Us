import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
  QueryKey,
} from "@tanstack/react-query";
import { cache } from "react";

export const getQueryClient = cache(() => new QueryClient());

interface QueryProps<ResponseType = unknown> {
  queryKey: QueryKey;

  queryFn: () => Promise<ResponseType>;
}

export async function getDehydratedQuery<Q extends QueryProps>({
  queryKey,
  queryFn,
}: Q) {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({ queryKey, queryFn });
  const dehydratedState = dehydrate(queryClient);

  return dehydratedState;
}

export const Hydrate = HydrationBoundary;
