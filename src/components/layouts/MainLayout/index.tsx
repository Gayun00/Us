import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <div className="pt-[41px] flex flex-col items-center">
      <div className="w-[570px] flex flex-col space-y-[40px]">{children}</div>
    </div>
  );
};

export default MainLayout;
