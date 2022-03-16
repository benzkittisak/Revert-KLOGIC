import React from "react";
import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <header className="main-header">
      <Link className="logo" to={process.env.PUBLIC_URL + "/account"}>
        KLOGIC
      </Link>
      <div className="mt-2">
        <nav className="navbar navbar-static-top" role="navigation">
          <a
            href="#"
            data-toggle="push-menu"
            className="sidebar-toggle"
            role="button"
          >
            <span className="sr-only">
              <i className="fas fa-bars"></i>
            </span>
          </a>

          <ul className="nav navbar-nav navbar-right">
              <li>ออกจากระบบ อะไรก็ว่าไปก่อนนะ</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default MainHeader;
