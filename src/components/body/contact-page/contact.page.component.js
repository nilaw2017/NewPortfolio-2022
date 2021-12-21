import React, { Component } from "react";
import "./contact.page.component.css";
const mail = "https://formsubmit.co/fc1b4d2877825023a22953a10a6e17b0";

class Contact extends Component {
  constructor(props) {
    super();
    this.state = {
      email: "",
    };
  }
  changes = (e) => {
    const { value } = e.target;
    // console.log("Email >>", value);
    this.setState({
      email: value,
    });
    console.log(this.state.email);
    // return value;
  };
  // afterSubmit = () => {
  //   console.log(this.changes);
  //   return this.changes;
  // };

  render() {
    return (
      <section id="contact mb-5">
        <form action={mail} method="POST">
          <article className="d-flex justify-content-center text-bold">
            <span className="menu-header text-primary">CONTACT</span>
          </article>
          <section className="d-block border d-xl-flex">
            <div className="col-xl-6 mt-5">
              <h2>GET IN TOUCH</h2>
              <div className="d-flex mt-5">
                <i className="fa fa-child fa-2x  col-2"></i>
                <h5>Kalanki, Kathmandu</h5>
              </div>
              <div className="d-flex mt-5">
                <i className="fa fa-envelope fa-2x  col-2"></i>
                <h5>nilaw2016@gmail.com</h5>
              </div>
              <div className="d-flex mt-5">
                <i className="fa fa-phone fa-2x  col-2"></i>
                <h5>9841272444</h5>
              </div>
            </div>
            <div className="col-xl-6 mt-5">
              <h2>CONTACT FORM</h2>
              <div className="inputs">
                <div>
                  <input
                    type="hidden"
                    name="_subject"
                    value={this.state.email}
                  ></input>
                  <input type="hidden" name="_template" value="table"></input>
                  <div className="mt-4">
                    <input
                      name="name"
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="mt-4">
                    <input
                      onChange={this.changes}
                      name="email"
                      type="email"
                      id="email"
                      name="email"
                      placeholder="E-mail Address"
                      required
                    />
                  </div>

                  <div className="mt-4">
                    <textarea
                      // onChange={}
                      name="message"
                      id="message"
                      name="message"
                      placeholder="Message here..."
                      required
                    ></textarea>
                  </div>
                  <div className="mt-4">
                    <button
                      // onSubmit={this.afterSubmit}
                      className="btn contact-btn"
                    >
                      SEND MESSAGE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </form>
        <hr></hr>
      </section>
    );
  }
}

export default Contact;
