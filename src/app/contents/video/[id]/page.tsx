import React from "react";
import { getDehydratedContentByIdQuery } from "@/queries/contents";
import HydrateOnClient from "@/components/providers/HydrateOnClient";
import Client from "./Client";

interface Props {
  params: { id: string };
}

const VideoContentPage = async ({ params }: Props) => {
  const dehydratedState = getDehydratedContentByIdQuery({
    id: params.id,
    expand: "news,author",
  });

  return (
    <HydrateOnClient state={dehydratedState}>
      <Client id={params.id} />
    </HydrateOnClient>
  );
};

export default VideoContentPage;
