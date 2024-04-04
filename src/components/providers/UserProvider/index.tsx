"use client";

import { UserRecord } from "@/types/httpRequest";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";

interface Props {
  children: React.ReactNode;
}

const UserProvider = ({ children }: Props) => {
  const pathname = usePathname();
  const user = useSelector((state: { user: UserRecord }) => state.user);
  if (!user.name && pathname !== "/login") {
    if (typeof window !== "undefined") window.location.href = "/login";
  }
  return <div>{children}</div>;
};

export default UserProvider;
