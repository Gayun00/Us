import React, { ReactNode } from "react";
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
import RefContentCard from "./RefContentCard";
import Author from "./Author";
import TextContent from "./TextContent";

interface Props {
  children: ReactNode;
}

const ContentCard = ({ children }: Props) => {
  return (
    // TODO: compound component pattern 적용해 리팩토링, 각 author, news props 내부 전달하도록 변경
    <Card className="px-[35px] py-[30px] max-w-[570px]">{children}</Card>
  );
};

ContentCard.RefContent = RefContentCard;
ContentCard.Author = Author;
ContentCard.TextContent = TextContent;

export default ContentCard;
