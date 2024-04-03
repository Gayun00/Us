"use client";

import { useContentsInfiniteQuery } from "@/queries/contents";
import Header from "@/components/layouts/Header";
import ContentCard from "@/components/cards/ContentCard";
import MainLayout from "@/components/layouts/MainLayout";
import "./globals.css";

export default function Home() {
  const { data } = useContentsInfiniteQuery();

  return (
    <div className="min-w-[770px]">
      {/* TODO: layout 리팩토링 */}
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
      </MainLayout>
    </div>
  );
}
