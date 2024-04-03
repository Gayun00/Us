import React from "react";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="h-screen flex flex-col items-center">
      <div className="mt-[150px] w-[370px] h-full">{children}</div>
    </div>
  );
};

export default Layout;
