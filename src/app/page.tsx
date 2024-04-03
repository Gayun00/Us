"use client";

import { useContentsInfiniteQuery } from "@/queries/contents";
import Header from "@/components/layouts/Header";
import ContentCard from "@/components/cards/ContentCard";
import MainLayout from "@/components/layouts/MainLayout";
import InfiniteScrollTrigger from "@/components/InfiniteScrollTrigger";
import "./globals.css";

export default function Home() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useContentsInfiniteQuery();

  return (
    <div className="min-w-[770px]">
      {/* TODO: layout 리팩토링 */}
      {/* Suspense 및 Skeleton UI 추가 */}
      <Header />
      <MainLayout>
        {data?.pages
          ?.flatMap(({ items }) => items)
          .map(({ id, title, text, expand }) => (
            <ContentCard key={id}>
              <ContentCard.Author {...expand.author} />
              <ContentCard.TextContent title={title} text={text} />
              {expand?.news && <ContentCard.RefContent {...expand.news} />}
            </ContentCard>
          ))}

        <InfiniteScrollTrigger
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
          isFetchingNextPage={isFetchingNextPage}
        />
      </MainLayout>
    </div>
  );
}
