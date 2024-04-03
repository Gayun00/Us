import Input from "@/components/Input";
import WideButton from "@/components/WideButton";
import Image from "next/image";
import React from "react";
import Logo from "@/assets/logo.svg";

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center">
      <Image src={Logo} width={210} height={210} alt="logo" />
      <div className="mt-[71px] mb-[53px] w-full space-y-[33px]">
        <Input
          label="아이디"
          id="id"
          type="username"
          placeholder="패스워드를 입력해주세요"
        />

        <Input
          label="패스워드"
          id="password"
          type="password"
          placeholder="패스워드를 입력해주세요"
        />
      </div>
      <WideButton text="로그인" />
    </div>
  );
};

export default LoginPage;
