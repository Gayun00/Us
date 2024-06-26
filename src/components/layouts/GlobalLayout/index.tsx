"use client";

import React from "react";
import Header from "../Header";
import { usePathname } from "next/navigation";

interface Props {
  children: React.ReactNode;
}

const GlobalLayout = ({ children }: Props) => {
  const pathname = usePathname();

  if (pathname.includes("/login")) {
    return <>{children}</>;
  }

  return (
    <div>
      <Header />
      <div className="pt-[100px]">{children}</div>
    </div>
  );
};

export default GlobalLayout;
