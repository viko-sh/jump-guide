import React from "react";
import { Times } from "styled-icons/fa-solid";
import {
  StyledSideNav,
  StyledSideNavCloseIcon,
  StyledSideNavList,
  StyledSideNavListItem
} from "./Styles";

export const SideNav = (props: any) => {
  return (
    <StyledSideNav active={props.active}>
      <StyledSideNavCloseIcon onClick={props.toggleSideActive}>
        <Times size="16" />
      </StyledSideNavCloseIcon>
      <StyledSideNavList>
        <StyledSideNavListItem>Item one</StyledSideNavListItem>
        <StyledSideNavListItem>Item two</StyledSideNavListItem>
        <StyledSideNavListItem>Item three</StyledSideNavListItem>
        <StyledSideNavListItem>Item four</StyledSideNavListItem>
        <StyledSideNavListItem>Item five</StyledSideNavListItem>
      </StyledSideNavList>
    </StyledSideNav>
  );
};
