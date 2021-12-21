import React from "react";
import Typical from "react-typical";

import "./home.component.css";
export default function Home() {
  return (
    <section id="home" className="text-center mt-5">
      <img
        src={process.env.PUBLIC_URL + "/assets/images/myAvatar.png"}
        className="myAvatar mt-5 mb-5"
        alt="asdas"
      ></img>

      <h1 className="text-primary mt-5">Nilaw Manandhar</h1>
      <h5 className="text-secondary mt-5">
        I'm{" "}
        <Typical
          className="text-red"
          steps={[
            "A Student",
            2000,
            "A Team Leader",
            2000,
            "A Front End Developer",
            2000,
          ]}
          loop={Infinity}
          wrapper="b"
        ></Typical>
      </h5>

      <div className="social-media mt-5">
        <i className="fa fa-facebook"></i>
        <i className="fa fa-twitter"></i>
        <i className="fa fa-instagram"></i>
        <i className="fa fa-linkedin"></i>
      </div>

      <button className="contact-me-btn btn mt-5 text-light ">
        Contact Me
      </button>
      <hr className="m-5"></hr>
    </section>
  );
}
