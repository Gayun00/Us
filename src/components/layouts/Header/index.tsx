import Image from "next/image";
import React from "react";
import Link from "next/link";
import Logo from "@/assets/logo.svg";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useContentByIdQuery } from "@/queries/contents";
import { signOut, useSession } from "next-auth/react";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const session = useSession();
  const isLoggedIn = session.status === "authenticated";
  const pathnames = pathname.split("/");
  const contentId = pathnames[pathnames.length - 1];

  const handleLogout = () => {
    signOut();
    router.push("/login");
  };

  const handleLogin = () => {
    router.push("/login");
  };

  const { data } = useContentByIdQuery({
    id: contentId,
    expand: "news,author",
  });

  return (
    <div className="fixed py-[24px] pr-[135px] pl-[130px] w-full h-[100px] flex justify-between items-center bg-white z-10">
      <Link href="/">
        <Image src={Logo} alt="logo" width={52} height={52} />
      </Link>
      {data && (
        <p className="text-[20px] font-semibold text-ellipsis overflow-hidden whitespace-nowrap min-w-[20px]">
          {data?.title}
        </p>
      )}
      <Button
        variant="outline"
        onClick={isLoggedIn ? handleLogout : handleLogin}
        className="border-us-primary text-us-primary">
        {isLoggedIn ? "로그아웃" : "로그인"}
      </Button>
    </div>
  );
};

export default Header;
