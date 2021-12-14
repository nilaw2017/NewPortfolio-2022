import React, { Component } from "react";
import $ from "jquery";

import "./loader.css";

class Loader extends React.Component {
  componentDidMount() {
    $(window).on("load", () => {
      $("#loader-box").fadeOut("slow");
    });
  }
  render() {
    return (
      <>
        <section id="loader-box">
          <div className="loader" id="loader"></div>
          <div className="loader" id="loader2"></div>
          <div className="loader" id="loader3"></div>
          <div className="loader" id="loader4"></div>
          <span id="text">LOADING...</span>
        </section>
      </>
    );
  }
}

export default Loader;
