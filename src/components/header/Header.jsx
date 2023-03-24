import React from "react";
import sprite from "../../assets/sprite.svg";
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="header_nav">
          <a className="logo" href="/">
            <svg width='104' height='26'>
              <use href={`${sprite}#icon-Logo`}/>
            </svg>
          </a>

          <ul className="nav_btn">
            <li>
              <a className="btn" href="#users" aria-label="link to users">
                Users
              </a>
            </li>
            <li>
              <a className="btn" href="#reg" aria-label="link to registration form">
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
