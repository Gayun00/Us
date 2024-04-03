import React from "react";

const ContentLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="flex justify-center">{children}</div>;
};

export default ContentLayout;
