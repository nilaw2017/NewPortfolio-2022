import React, { Component } from "react";
import "./aboutme.component.css";

class AdminAboutMe extends Component {
  constructor() {
    super();
    this.state = {
      fullName: "",
      age: "",
      nationality: "",
      address: "",
      language: "",
    };
  }
  changes = (e) => {
    let { value } = e.target;
    console.log(value);
  };
  render() {
    return (
      <React.Fragment>
        <div className="d-flex justify-content-center text-bold">
          <span className="menu-header text-primary pr-3">ABOUT</span>
          <span className="menu-header text-red">ME</span>
        </div>

        <div className="d-xl-flex">
          <div className="col-xl-6 mt-4">
            <h2 className="text-primary text-bold">PERSONAL INFOS</h2>
            <div className="d-xl-flex">
              <div className="col-xl-6 d-flex mt-3">
                <h6>Full Name :</h6>
                <input onChange={this.changes}></input>
              </div>
              <div className="col-xl-6 d-flex mt-3">
                <h6>Age :</h6>
                <h6>21 years</h6>
              </div>
            </div>
            <div className="d-xl-flex">
              <div className="col-xl-6 d-flex mt-3">
                <h6>Nationality :</h6>
                <h6>Nepalese</h6>
              </div>
              <div className="col-xl-6 d-flex mt-3">
                <h6>Address :</h6>
                <h6>Kathmandu, Nepal</h6>
              </div>
            </div>
            <div className="d-xl-flex">
              <div className="col-xl-6 d-flex mt-3">
                <h6>Phone No. :</h6>
                <h6>9841272444</h6>
              </div>
              <div className="col-xl-6 d-flex mt-3">
                <h6>Language:</h6>
                <h6>Nepali, English, Newari</h6>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <button className="text-1 p-3 download-cv-btn mt-3 bg-light position-relative">
                Download CV
                <i className="fa fa-cloud-download fa-2x d-flex justify-content-center align-items-center position-absolute"></i>
              </button>
            </div>
          </div>
          <div className="col-xl-6 mt-4 border text-">
            <h2 className="text-primary text-bold ">ACHIEVEMENTS</h2>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AdminAboutMe;
