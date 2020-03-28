import React from "react";

import { Layout, Header, SideNav, StyledMenuIcon } from "jump-guide";
import { Bars } from "styled-icons/fa-solid";

export function App() {
  const [sideActive, setSideActive] = React.useState(false);
  const toggleSideActive = e => setSideActive(!sideActive);
  return (
    <Layout>
      <Header>
        <div className="header__search">Search...</div>
        <div className="header__avatar">Your face</div>
      </Header>
      <StyledMenuIcon onClick={toggleSideActive}>
        <Bars size="16" />
      </StyledMenuIcon>
      <SideNav active={sideActive} toggleSideActive={toggleSideActive} />
      <main className="main">
        <div className="main-header">
          <div className="main-header__heading">Hello User</div>
          <div className="main-header__updates">Recent Items</div>
        </div>
        <div className="main-header">
          <div className="main-header__heading">Hello User</div>
          <div className="main-header__updates">Recent Items</div>
        </div>
        <div className="main-header">
          <div className="main-header__heading">Hello User</div>
          <div className="main-header__updates">Recent Items</div>
        </div>
        <div className="main-header">
          <div className="main-header__heading">Hello User</div>
          <div className="main-header__updates">Recent Items</div>
        </div>
        <div className="main-header">
          <div className="main-header__heading">Hello User</div>
          <div className="main-header__updates">Recent Items</div>
        </div>
        <div className="main-header">
          <div className="main-header__heading">Hello User</div>
          <div className="main-header__updates">Recent Items</div>
        </div>
        <div className="main-header">
          <div className="main-header__heading">Hello User</div>
          <div className="main-header__updates">Recent Items</div>
        </div>
      </main>
      <footer className="footer">
        <div className="footer__copyright">&copy; 2020</div>
        <div className="footer__signature">
          Made with love by JumpPayments Team
        </div>
      </footer>
    </Layout>
  );
}
