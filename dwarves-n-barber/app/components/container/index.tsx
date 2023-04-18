import { ReactElement } from "react";
import { Container } from "./styled";

interface iProps {
  children: ReactElement;
}

export function Card({ children }: iProps) {
  return <Container>{children}</Container>;
}
