import Image from "next/image";
import React from "react";
import Logo from "@/assets/logo.svg";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <div className="py-[24px] pr-[135px] pl-[130px] flex justify-between items-center">
      <Image src={Logo} alt="logo" width={52} height={52} />
      <Button variant="outline" className="border-us-primary text-us-primary">
        로그아웃
      </Button>
    </div>
  );
};

export default Header;
