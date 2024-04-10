"use client";

import { Input } from "@/components/ui/input";
import WideButton from "@/components/buttons/WideButton";
import Image from "next/image";
import React from "react";
import Logo from "@/assets/logo.svg";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useLoginMutation } from "@/queries/user";
import { UserRecord } from "@/types/httpRequest";
import { STORAGE_KEY } from "@/constants";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { updateUser } from "@/store/slices/userSlice";
import { signIn, useSession } from "next-auth/react";

const formSchema = z.object({
  id: z.string().min(2).max(50),
  password: z.string().min(2).max(50),
});

const LoginPage = () => {
  const dispatch = useDispatch();
  const mutation = useLoginMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    try {
      signIn("credentials", {
        // TODO: 테스트 이후 빈 values 값으로 변경
        username: "johndoh@us-all.cc",
        password: "qwer1234",
        redirect: true,
        callbackUrl: "/",
      });
    } catch (err: { message: string } | any) {
      alert(err.message);
    }
  };

  const setAuthToken = (token: string) => {
    localStorage.setItem(STORAGE_KEY.TOKEN, token);
  };

  const updateUserInfo = (info: UserRecord) => {
    dispatch(updateUser(info));
  };

  return (
    <div className="flex flex-col items-center">
      <Image src={Logo} width={210} height={210} alt="logo" />

      <div className="mt-[px] mb-[53px] w-full space-y-[33px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="id"
              render={({ field }) => (
                <FormItem className="flex flex-col space-y-[10px]">
                  <FormLabel className="text-md font-medium">아이디</FormLabel>
                  <FormControl>
                    <Input
                      type="username"
                      placeholder="아이디를 입력해주세요"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="flex flex-col space-y-[10px]">
                  <FormLabel className="text-md font-medium">
                    패스워드
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="패스워드를 입력해주세요"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <WideButton type="submit" text="로그인" />
          </form>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
