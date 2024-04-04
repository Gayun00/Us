"use client";

import React from "react";
import { useContentByIdQuery } from "@/queries/contents";

interface Props {
  id: string;
}

const Client = ({ id }: Props) => {
  const { data, isError, isLoading } = useContentByIdQuery({
    id,
    expand: "news,author",
  });

  return (
    <>
      {isLoading && <p className="text-center">Loading...</p>}
      {isError ? (
        <p className="text-center">에러가 발생했습니다.</p>
      ) : (
        <p
          className="text-start"
          dangerouslySetInnerHTML={{ __html: data?.text || "" }}
        />
      )}
    </>
  );
};

export default Client;
