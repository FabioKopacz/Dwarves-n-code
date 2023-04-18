import React, { ButtonHTMLAttributes } from "react";
import { ButtonA } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ children, ...props }: ButtonProps) {
  return <ButtonA {...props}>{children}</ButtonA>;
}
