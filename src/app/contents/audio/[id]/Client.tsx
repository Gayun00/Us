"use client";

import React from "react";
import { useContentByIdQuery } from "@/queries/contents";

interface Props {
  id: string;
}

const Client = ({ id }: Props) => {
  const { data } = useContentByIdQuery({
    id,
    expand: "news,author",
  });

  return <audio className="w-full" src={data?.mediaUrl} controls />;
};

export default Client;
