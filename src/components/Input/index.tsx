import React from "react";
import { Input as ShadCnInput } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Props {
  label: string;
  placeholder: string;
  type: "email" | "password";
  id: string;
}

const Input = ({ label, placeholder, id, type }: Props) => {
  return (
    <div className="flex flex-col space-y-[10px]">
      <Label className="text-md font-medium" htmlFor={id}>
        {label}
      </Label>
      <ShadCnInput id={id} type={type} placeholder={placeholder} />
    </div>
  );
};

export default Input;
