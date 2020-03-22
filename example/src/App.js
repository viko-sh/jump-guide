import React, { Component } from "react";

import { Layout, Header } from "jump-guide";

export default class App extends Component {
  render() {
    return (
      <Layout>
        <Header>
          <div className="header__search">Search...</div>
          <div className="header__avatar">Your face</div>
        </Header>
        <div className="menu-icon">
          <i className="fas fa-bars"></i>
        </div>
        <aside className="sidenav">
          <ul className="sidenav__list">
            <li className="sidenav__list-item">Item One</li>
            <li className="sidenav__list-item">Item Two</li>
            <li className="sidenav__list-item">Item Three</li>
            <li className="sidenav__list-item">Item Four</li>
            <li className="sidenav__list-item">Item Five</li>
          </ul>
        </aside>
        <main className="main">
          <div className="main-header">
            <div className="main-header__heading">Hello User</div>
            <div className="main-header__updates">Recent Items</div>
          </div>
        </main>
        <footer className="footer">
          <div className="footer__copyright">&copy; 2018 MTH</div>
          <div className="footer__signature">Made with love by pure genius</div>
        </footer>
      </Layout>
    );
  }
}
