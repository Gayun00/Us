"use client";

import React from "react";
import { useContentByIdQuery } from "@/queries/contents";
import Loading from "@/components/fallbacks/Loading";
import Error from "@/components/fallbacks/Error";

interface Props {
  id: string;
}

const Client = ({ id }: Props) => {
  const { data, isError, isLoading } = useContentByIdQuery({
    id,
    expand: "news,author",
  });

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return <video className="w-full" src={data?.mediaUrl} controls />;
};

export default Client;
