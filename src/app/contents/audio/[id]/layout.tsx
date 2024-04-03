import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return <div className="mt-[91px] w-[570px]">{children}</div>;
};

export default Layout;
