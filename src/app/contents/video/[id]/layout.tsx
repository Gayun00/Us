import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return <div className="mt-[40px] w-[770px]">{children}</div>;
};

export default Layout;
