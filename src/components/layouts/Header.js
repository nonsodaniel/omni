import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="navbar fixed-top  flex-md-nowrap p-0">
        <Link className="navbar-brand col-sm-3 col-md-2 mr-0" to="#">
          Company name
        </Link>
        <div className="main-nav">
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
            <Link className="nav-link" to="#">
              Sign out
            </Link>
          </li>
        </ul>
        </div>
      
      </nav>
    </div>
  );
};

export default Header;
