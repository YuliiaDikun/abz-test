import React from "react";
import logo from "../../assets/Logo.svg";
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="header_nav">
          <a className="logo" href="up"><img src={logo} alt="test task logo"/></a>

          <ul className="nav_btn">
            <li>
              <a className="btn" href="#users">
                Users
              </a>
            </li>
            <li>
              <a className="btn" href="#reg">
                Sign up
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
