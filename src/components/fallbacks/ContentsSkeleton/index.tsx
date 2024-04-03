import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

const array = Array.from({ length: 5 }, (_, index) => index + 1);

const ContentsSkeletons = () => {
  return (
    <>
      {array.map((idx) => (
        <ContentsSkeleton key={idx} />
      ))}
    </>
  );
};

export default ContentsSkeletons;

export const ContentsSkeleton = () => {
  return (
    <Card className="px-[35px] py-[30px] w-[570px] h-[371px] flex flex-col justify-between space-y-[15px]">
      <div className="flex flex-col space-y-[15px]">
        <Skeleton className="h-[80px] w-[80px] rounded-xl" />
        <div className="flex flex-col space-y-2">
          <Skeleton className="h-3 w-full rounded-xl" />
          <Skeleton className="h-3 w-full rounded-xl" />
          <Skeleton className="h-3 w-full rounded-xl" />
        </div>
      </div>
      <div className="space-y-2">
        <Skeleton className="h-[108px] w-full" />
      </div>
    </Card>
  );
};
