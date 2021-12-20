import React from "react";
import "./header.component.css";
import $ from "jquery";

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
        <div className="d-flex col-xl-4 p-0 navMenu slider-menu-hidden align-items-center">
          <nav className="col-xl-12 position-relative position-xl-static d-flex justify-content-xl-between justify-content-between align-items-center slider-container">
            <aside className="position-relative">
              <a className="nav-link text-primary" href="#">
                Home
              </a>
            </aside>
            <aside className="position-relative">
              <a className="nav-link text-primary" href="#">
                About Us
              </a>
            </aside>
            <aside className="position-relative">
              <a className="nav-link text-primary" href="#">
                Resume
              </a>
            </aside>
            <aside className="position-relative">
              <a className="nav-link text-primary" href="#">
                Contact Info
              </a>
            </aside>
          </nav>
        </div>

        {/* LOGO COLUMN */}
        <div className="col-xl-4 col-4 d-flex justify-content-md-start justify-content-xl-center align-items-center">
          <span>LOGO</span>
        </div>

        {/* RESUME COLUMN */}
        <div className="col-xl-3 col-4 d-flex download-resume-container justify-content-center justify-content-xl-end">
          <a href="./assets/BCA2019.pdf" download="BCA" className="p-0">
            <button
              download="BCA2019.pdf"
              className="btn p-3 download-resume-btn"
            >
              Download Resume
            </button>
          </a>
        </div>

        {/* NIGHT MODE */}
        <i className="d-flex justify-content-end align-items-center col-2 col-xl-1 p-1 fa-2x fa  fa-sun-o"></i>
        <i
          onClick={this.onMenuClicked}
          className="d-flex justify-content-end col-2 d-xl-none p-1 fa-3x fa fa-bars"
        ></i>
      </header>
    );
  }
}

export default Header;
