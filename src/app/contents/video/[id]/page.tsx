import React from "react";
import { getQueryClient } from "@/utils/reactQuery";
import HydrateOnClient from "@/components/providers/HydrateOnClient";
import { dehydrate } from "@tanstack/react-query";
import { getContentById } from "@/apis/contents";
import Client from "./Client";

interface Props {
  params: { id: string };
}

const queryKey = {
  all: ["contents"],
  content: (id: string) => [...queryKey.all, id],
};

const VideoContentPage = async ({ params }: Props) => {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: queryKey.content(params.id),
    queryFn: () => getContentById({ id: params.id, expand: "news,author" }),
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrateOnClient state={dehydratedState}>
      <Client id={params.id} />
    </HydrateOnClient>
  );
};

export default VideoContentPage;
