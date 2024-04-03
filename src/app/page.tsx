"use client";

import { useContentsInfiniteQuery } from "@/queries/contents";
import ContentCard from "@/components/cards/ContentCard";
import InfiniteScrollTrigger from "@/components/InfiniteScrollTrigger";
import SuspenseBoundary from "@/components/SuspenseBoundary";
import LoadError from "@/components/fallbacks/LoadError";
import ContentsSkeletons from "@/components/fallbacks/ContentsSkeleton";
import "./globals.css";

export default function Home() {
  return (
    <SuspenseBoundary Fallback={ContentsSkeletons} ErrorFallback={LoadError}>
      <ContentsList />
    </SuspenseBoundary>
  );
}

const ContentsList = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useContentsInfiniteQuery();

  return (
    <div className="min-w-[770px]">
      <div className="pt-[41px] flex flex-col items-center">
        <div className="w-[570px] flex flex-col space-y-[40px]">
          {data?.pages
            ?.flatMap(({ items }) => items)
            .map(({ id, title, type, text, expand }) => (
              <ContentCard key={id}>
                <ContentCard.Author {...expand.author} />
                <ContentCard.TextContent
                  title={title}
                  text={text}
                  type={type}
                  id={id}
                />
                {expand?.news && <ContentCard.RefContent {...expand.news} />}
              </ContentCard>
            ))}

          {isFetchingNextPage && <ContentsSkeletons />}

          <InfiniteScrollTrigger
            fetchNextPage={fetchNextPage}
            hasNextPage={hasNextPage}
            isFetchingNextPage={isFetchingNextPage}
          />
        </div>
      </div>
    </div>
  );
};
