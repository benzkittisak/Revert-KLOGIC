import React from "react";
import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <header className="main-header">
      <Link className="logo" to={process.env.PUBLIC_URL + "/account"}>
        KLOGIC
      </Link>
      <nav className="navbar navbar-static-top" role="navigation">
        <a
          href="#"
          data-toggle="push-menu"
          className="sidebar-toggle"
          role="button"
        >
          <i className="fas fa-bars"></i>
          <span className="sr-only">
            Toggle navigation
          </span>
        </a>

        <ul className="nav navbar-nav navbar-right">
          <li className="nav-item">
              <Link to="#">ออกจากระบบ อะไรก็ว่าไปก่อนนะ</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
