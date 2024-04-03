import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Decorator = ({ children }: Props) => {
  return <div className="w-[360px]">{children}</div>;
};

export default Decorator;
