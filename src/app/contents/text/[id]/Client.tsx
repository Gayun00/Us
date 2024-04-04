"use client";

import React from "react";
import { useContentByIdQuery } from "@/queries/contents";
import Error from "@/components/fallbacks/Error";
import Loading from "@/components/fallbacks/Loading";

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

  return (
    <p
      className="text-start"
      dangerouslySetInnerHTML={{ __html: data?.text || "" }}
    />
  );
};

export default Client;
