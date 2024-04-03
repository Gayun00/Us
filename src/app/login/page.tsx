"use client";

import { Input } from "@/components/ui/input";
import WideButton from "@/components/WideButton";
import Image from "next/image";
import React from "react";
import Logo from "@/assets/logo.svg";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  id: z.string().min(2).max(50),
  password: z.string().min(2).max(50),
});

const LoginPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

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
