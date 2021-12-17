import React from "react";
import "./header.component.css";
import $ from "jquery";
import { findDOMNode } from "react-dom";

class Header extends React.Component {
  componentDidMount() {
    $(".fa-bars").click(function () {
      $(".slider-menu-hidden").toggleClass("slider-menu");
      // // setTimeout(function () {
      // $(".fa-bars").toggleClass("fa-close");
      // $(".fa-close").toggleClass("fa-bars");
      // // }, 0);
    });
    $(".fa-sun-o").click(function () {
      $(".fa-sun-o").toggleClass("fa-moon-o");
      $("body").toggleClass("night-mode");
      $(".text-primary").toggleClass("text-night");
      $(".fa").toggleClass("text-night");
    });
  }
  render() {
    return (
      <header className="d-flex head">
        {/* NAV MENU COLUMN*/}
        <div className="d-xl-block align-items-center col-xl-4 p-0 navMenu slider-menu-hidden">
          <nav className="position-relative position-lg-static">
            <ul className="nav d-flex d-xl-flex justify-content-between align-content-center flex-wrap slider-container">
              <li className="nav-item ">
                <a className="nav-link text-dark position-relative" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link text-dark position-relative" href="#">
                  Portfolio
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link text-dark position-relative" href="#">
                  Resume
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link text-dark position-relative" href="#">
                  Contact Info
                </a>
              </li>
            </ul>
          </nav>
        </div>
        {/* {onMenuClicked} */}

        {/* LOGO COLUMN */}
        <div className="col-xl-4 col-4 d-flex justify-content-md-start justify-content-xl-center align-items-center">
          <span>LOGO</span>
        </div>

        {/* RESUME COLUMN */}
        <div className="col-xl-4 col-4 d-flex download-resume-container justify-content-center justify-content-xl-end">
          <a href="./assets/BCA2019.pdf" download="BCA" className="p-0">
            <button
              download="BCA2019.pdf"
              className="btn p-3 download-resume-btn"
            >
              Download Resume
            </button>
          </a>
        </div>
        <i className="d-flex justify-content-end align-items-center col-2 d-xl-none p-1 fa-2x fa  fa-sun-o"></i>
        <i
          onClick={this.onMenuClicked}
          className="d-flex justify-content-end col-2 d-xl-none p-1 fa-3x fa fa-bars"
        ></i>
      </header>
    );
  }
}

export default Header;
