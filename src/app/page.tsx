"use client";

import { useSelector } from "react-redux";
import "./globals.css";

export default function Home() {
  const user = useSelector((state) => state);
  console.log(user);
  return <div>homed page</div>;
}
