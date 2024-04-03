import React, { ReactNode } from "react";
import { Card } from "@/components/ui/card";
import RefContentCard from "./RefContentCard";
import Author from "./Author";
import TextContent from "./TextContent";
import Link from "next/link";

interface Props {
  children: ReactNode;
  id: string;
  type: string;
}

const ContentCard = ({ id, type, children }: Props) => {
  return (
    <Link href={`/contents/${type}/${id}`}>
      <Card className="px-[35px] py-[30px] max-w-[570px]">{children}</Card>;
    </Link>
  );
};

ContentCard.RefContent = RefContentCard;
ContentCard.Author = Author;
ContentCard.TextContent = TextContent;

export default ContentCard;
