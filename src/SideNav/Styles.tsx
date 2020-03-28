import styled, { css } from "styled-components";

interface StyledSideNavProps {
  active: boolean;
}
export const StyledSideNav = styled.aside<StyledSideNavProps>`
  grid-area: sidenav;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 240px;
  position: fixed;
  overflow-y: auto;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
  z-index: 2; /* Needs to sit above the hamburger menu icon */
  background-color: #fff;
  transform: translateX(-245px);
  transition: all 0.6s ease-in-out;
  ${(props: any) =>
    props.active &&
    css`
      transform: translateX(0);
    `};
  /* Non-mobile styles, 750px breakpoint */
  @media only screen and (min-width: 46.875em) {
    position: relative; /* Fixed position on mobile */
    transform: translateX(0);
  }
`;

export const StyledMenuIcon = styled.div`
  position: fixed;
  display: flex;
  top: 5px;
  left: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  z-index: 1;
  cursor: pointer;
  padding: 12px;
  background-color: #dadae3;
`;

export const StyledSideNavCloseIcon = styled.div`
  position: absolute;
  visibility: visible;
  top: 8px;
  right: 12px;
  cursor: pointer;
  font-size: 20px;
  color: #ddd;
  /* Non-mobile styles, 750px breakpoint */
  @media only screen and (min-width: 46.875em) {
    visibility: hidden;
  }
`;

export const StyledSideNavList = styled.ul`
  padding: 0;
  margin-top: 85px;
  list-style-type: none;
`;

export const StyledSideNavListItem = styled.li`
  padding: 20px 20px 20px 40px;
  color: #263238;
`;
