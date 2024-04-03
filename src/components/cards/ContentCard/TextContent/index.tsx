import React from "react";
import { CardDescription, CardTitle } from "@/components/ui/card";
import Link from "next/link";

interface Props {
  title: string;
  text: string;
  type: string;
  id: string;
}

const TextContent = ({ title, text, type, id }: Props) => {
  return (
    <div className="px-0 py-[15px] space-y-[15px]">
      <Link href={`/contents/${type}/${id}`}>
        <CardTitle className="text-[24px] font-semibold text-ellipsis overflow-hidden whitespace-nowrap">
          {title}
        </CardTitle>
        <CardDescription className="text-us-gray-text text-base text-ellipsis overflow-hidden whitespace-normal line-clamp-2">
          {text}
        </CardDescription>
      </Link>
    </div>
  );
};

export default TextContent;
