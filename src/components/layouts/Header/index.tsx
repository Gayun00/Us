import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import Logo from "@/assets/logo.svg";
import { STORAGE_KEY } from "@/constants";
import { usePathname, useRouter } from "next/navigation";
import { removeUser } from "@/store/slices/userSlice";
import { UserRecord } from "@/types/httpRequest";
import { Button } from "@/components/ui/button";
import { useContentByIdQuery } from "@/queries/contents";

const Header = () => {
  const user = useSelector((state: { user: UserRecord }) => state.user);
  const isLoggedIn = user.id;
  const router = useRouter();
  const dispatch = useDispatch();
  const pathname = usePathname();
  const pathnames = pathname.split("/");
  const contentId = pathnames[pathnames.length - 1];

  const handleLogout = () => {
    localStorage.removeItem(STORAGE_KEY.TOKEN);
    dispatch(removeUser());
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
