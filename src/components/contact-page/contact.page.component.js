import React, { Component } from "react";
const mail = "https://formsubmit.co/fc1b4d2877825023a22953a10a6e17b0";

class Contact extends Component {
  constructor(props) {
    super();
    this.state = {
      email: "",
    };
  }
  changes = (e) => {
    const { name, value } = e.target;
    console.log("name >>", value);
    return value;
  };
  afterSubmit = () => {
    console.log(this.changes);
    return this.changes;
  };

  render() {
    return (
      <>
        <section className="text-gray-600 body-font relative">
          <form
            className="container px-5 py-24 mx-auto"
            action={mail}
            method="POST"
          >
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Contact Us
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                gentrify.
              </p>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <input
                  type="hidden"
                  name="_subject"
                  value={this.afterSubmit}
                ></input>
                <input type="hidden" name="_template" value="table"></input>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Name
                    </label>
                    <input
                      name="name"
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Name"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Email
                    </label>
                    <input
                      onChange={this.changes}
                      name="email"
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email Address"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <label htmlFor="phone">Phone Number</label>
                <input
                  name="phone"
                  type="number"
                  placeholder="Your phone Number"
                ></input>

                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Message
                    </label>
                    <textarea
                      // onChange={}
                      name="message"
                      id="message"
                      name="message"
                      placeholder="Write your messages here..."
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button
                    // onSubmit={this.afterSubmit}
                    className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  >
                    Submit
                  </button>
                </div>
                <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                  <a className="text-indigo-500">example@email.com</a>
                  <p className="leading-normal my-5">
                    49 Smith St.
                    <br></br>Saint Cloud, MN 56301
                  </p>
                </div>
              </div>
            </div>
          </form>
        </section>
      </>
    );
  }
}

export default Contact;
