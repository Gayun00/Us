"use client";

import { useContentByIdQuery } from "@/queries/contents";

const Client = ({ id }: { id: string }) => {
  const { data } = useContentByIdQuery({
    id,
    expand: "news,author",
  });

  return (
    <div>
      <video className="w-[770px] h-[433px]" src={data?.mediaUrl} controls />
    </div>
  );
};

export default Client;
