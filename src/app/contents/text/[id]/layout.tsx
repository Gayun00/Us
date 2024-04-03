import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return <div className="mt-[59px] w-[762px]">{children}</div>;
};

export default Layout;
