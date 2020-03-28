import styled, { css } from "styled-components";
import { HeaderProps } from "./type";

export const StyledHeader = styled.header<Partial<HeaderProps>>`
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  background-color: rgb(0, 98, 255);
  ${(props: any) =>
    props.sticky &&
    css`
      position: fixed;
      top: 0;
      width: 100%;
      height: 50px;
    `}
`;
