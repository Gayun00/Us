import React, { ReactNode } from "react";
import { Card } from "@/components/ui/card";
import RefContentCard from "./RefContentCard";
import Author from "./Author";
import TextContent from "./TextContent";

interface Props {
  children: ReactNode;
}

const ContentCard = ({ children }: Props) => {
  return <Card className="px-[35px] py-[30px] max-w-[570px]">{children}</Card>;
};

ContentCard.RefContent = RefContentCard;
ContentCard.Author = Author;
ContentCard.TextContent = TextContent;

export default ContentCard;
