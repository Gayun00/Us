import React from "react";
import { Button } from "@/components/ui/button";

interface Props {
  text: string;
  type?: "submit" | "button";
}

const WideButton = ({ text, type = "button" }: Props) => {
  return (
    <Button
      type={type}
      className="w-full h-[70px] bg-us-primary text-md font-medium rounded-md">
      {text}
    </Button>
  );
};

export default WideButton;
