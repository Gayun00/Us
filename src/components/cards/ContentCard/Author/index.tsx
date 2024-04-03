import { getRelativeTime } from "@/utils/handleDate";
import Image from "next/image";
import React from "react";

interface Props {
  profileImage: string;
  name: string;
  job: string;
  updated: string;
}

const Author = (author: Props) => {
  const relativeTime = getRelativeTime(author?.updated);

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center space-x-[24px]">
        <Image
          src={author?.profileImage}
          alt="ref_content_thumbnail"
          width={80}
          height={80}
        />
        <div className="flex flex-col">
          <p className="font-semibold text-[22px]">{author?.name}</p>
          <p className="font-normal text-base">{author?.job}</p>
        </div>
      </div>
      <p className="font-normal text-base">{relativeTime}</p>
    </div>
  );
};

export default Author;
