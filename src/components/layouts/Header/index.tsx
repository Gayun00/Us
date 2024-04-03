import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import Logo from "@/assets/logo.svg";
import { STORAGE_KEY } from "@/constants";
import { useRouter } from "next/navigation";
import { removeUser } from "@/store/slices/userSlice";
import { UserRecord } from "@/types/httpRequest";
import { Button } from "@/components/ui/button";

const Header = () => {
  const user = useSelector((state: { user: UserRecord }) => state.user);
  const isLoggedIn = user.id;
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem(STORAGE_KEY.TOKEN);
    dispatch(removeUser());
    router.push("/login");
  };

  return (
    <div className="fixed py-[24px] pr-[135px] pl-[130px] w-full h-[100px] flex justify-between items-center bg-white">
      <Link href="/">
        <Image src={Logo} alt="logo" width={52} height={52} />
      </Link>
      {isLoggedIn && (
        <Button
          variant="outline"
          onClick={handleLogout}
          className="border-us-primary text-us-primary">
          로그아웃
        </Button>
      )}
    </div>
  );
};

export default Header;
