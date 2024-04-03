"use client";

import { useContentsInfiniteQuery } from "@/queries/contents";
import Header from "@/components/layouts/Header";
import ContentCard from "@/components/cards/ContentCard";
import MainLayout from "@/components/layouts/MainLayout";
import InfiniteScrollTrigger from "@/components/InfiniteScrollTrigger";
import "./globals.css";
import SuspenseBoundary from "@/components/SuspenseBoundary";
import LoadError from "@/components/fallbacks/LoadError";
import ContentsSkeletons from "@/components/fallbacks/ContentsSkeleton";

export default function Home() {
  return (
    <div className="min-w-[770px]">
      <Header />
      <MainLayout>
        <SuspenseBoundary
          Fallback={ContentsSkeletons}
          ErrorFallback={LoadError}>
          <ContentsList />
        </SuspenseBoundary>
      </MainLayout>
    </div>
  );
}

export const ContentsList = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useContentsInfiniteQuery();

  return (
    <>
      {/* TODO: layout 리팩토링 */}
      {data?.pages
        ?.flatMap(({ items }) => items)
        .map(({ id, title, text, expand }) => (
          <ContentCard key={id}>
            <ContentCard.Author {...expand.author} />
            <ContentCard.TextContent title={title} text={text} />
            {expand?.news && <ContentCard.RefContent {...expand.news} />}
          </ContentCard>
        ))}

      {isFetchingNextPage && <ContentsSkeletons />}

      <InfiniteScrollTrigger
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
      />
    </>
  );
};
