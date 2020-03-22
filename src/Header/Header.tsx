import React from "react";
import { StyledHeader } from "./Styles";

export const Header = (props: any) => {
  return <StyledHeader>{props.children}</StyledHeader>;
};
