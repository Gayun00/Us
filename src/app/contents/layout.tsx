import React from "react";

const ContentLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex justify-center">
      <div className="mt-[40px]">{children}</div>
    </div>
  );
};

export default ContentLayout;
