import React from "react";
import Image from "next/image";

interface Props {
  link: string;
  title: string;
  description: string;
  imageUrl: string;
}

const RefContentCard = (news: Props) => {
  return (
    <div className="w-full flex items-start justify-between bg-us-gray-card rounded-xl">
      <a
        href={news?.link}
        target="_blank"
        rel="noopener noreferrer"
        className="p-[10px] w-[392px] h-full space-y-[8px]">
        <p className="font-semibold text-ellipsis overflow-hidden whitespace-nowrap">
          {news?.title}
        </p>
        <p className="text-ellipsis overflow-hidden whitespace-nowrap">
          {news?.description}
        </p>
      </a>
      <div className="relative w-[108px] h-[108px] rounded-r-[10px] overflow-hidden">
        <Image src={news?.imageUrl} alt="ref_content_thumbnail" layout="fill" />
      </div>
    </div>
  );
};

export default RefContentCard;
