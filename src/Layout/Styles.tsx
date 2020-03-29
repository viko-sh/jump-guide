import styled from "styled-components";

export const StyledLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr; /* Side nav is hidden on mobile */
  grid-template-rows: 50px 1fr 50px;
  grid-template-areas:
    "header"
    "main"
    "footer";
  height: 100vh;
  overflow: hidden;
  /* Non-mobile styles, 750px breakpoint */
  @media only screen and (min-width: 46.875em) {
    grid-template-columns: 240px 1fr; /* Show the side nav for non-mobile screens */
    grid-template-areas:
      "sidenav header"
      "sidenav main"
      "sidenav footer";
  }
`;
