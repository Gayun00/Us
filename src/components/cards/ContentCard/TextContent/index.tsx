import React from "react";
import { CardDescription, CardTitle } from "@/components/ui/card";

interface Props {
  title: string;
  text: string;
}

const TextContent = ({ title, text }: Props) => {
  return (
    <div className="px-0 py-[15px] space-y-[15px]">
      <CardTitle className="text-[24px] font-semibold text-ellipsis overflow-hidden whitespace-nowrap">
        {title}
      </CardTitle>
      <CardDescription className="text-us-gray-text text-base text-ellipsis overflow-hidden whitespace-normal line-clamp-2">
        {text}
      </CardDescription>
    </div>
  );
};

export default TextContent;
