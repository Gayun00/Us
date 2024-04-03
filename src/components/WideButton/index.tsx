import React from "react";
import { Button } from "@/components/ui/button";

interface Props {
  text: string;
}

const WideButton = ({ text }: Props) => {
  return (
    <Button className="w-full h-[70px] bg-us-primary text-md font-medium">
      {text}
    </Button>
  );
};

export default WideButton;
