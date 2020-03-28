import React from "react";
import { StyledHeader } from "./Styles";
import { HeaderProps } from "./type";

export const Header = (props: HeaderProps) => {
  return <StyledHeader sticky={false}>{props.children}</StyledHeader>;
};
