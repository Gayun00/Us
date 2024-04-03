import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Logo from "@/assets/logo.svg";
import { Content } from "@/types/httpRequest";
import { getRelativeTime } from "@/utils/handleDate";

const ContentCard = (props: Content) => {
  const { news, author } = props.expand;
  const relativeTime = getRelativeTime(props?.updated);

  return (
    // TODO: compound component pattern 적용해 리팩토링, 각 author, news props 내부 전달하도록 변경
    <Card className="px-[35px] py-[30px] max-w-[570px]">
      <CardHeader className="p-0">
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
      </CardHeader>
      {/* TODO: click event 추가 */}
      <CardContent className="px-0 py-[15px] space-y-[15px]">
        <CardTitle className="text-[24px] font-semibold text-ellipsis overflow-hidden whitespace-nowrap">
          {props?.title}
        </CardTitle>
        <CardDescription className="text-us-gray-text text-base text-ellipsis overflow-hidden whitespace-normal line-clamp-2">
          {props.text}
        </CardDescription>
      </CardContent>
      {/* TODO: 외부에서 렌더링 여부 제어하도록 리팩토링 */}
      {news && (
        <CardFooter className="p-0">
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
              <Image
                src={news?.imageUrl}
                alt="ref_content_thumbnail"
                layout="fill"
              />
            </div>
          </div>
        </CardFooter>
      )}
    </Card>
  );
};

export default ContentCard;
