import React from "react";
import { dehydrate } from "@tanstack/react-query";
import { getQueryClient } from "@/utils/reactQuery";
import { getContentById } from "@/apis/contents";
import { contentsQueryKey } from "@/queries/contents";
import HydrateOnClient from "@/components/providers/HydrateOnClient";
import Client from "./Client";

interface Props {
  params: { id: string };
}

const AudioContentPage = async ({ params }: Props) => {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: contentsQueryKey.content(params.id),
    queryFn: () => getContentById({ id: params.id, expand: "news,author" }),
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrateOnClient state={dehydratedState}>
      <Client id={params.id} />
    </HydrateOnClient>
  );
};

export default AudioContentPage;
