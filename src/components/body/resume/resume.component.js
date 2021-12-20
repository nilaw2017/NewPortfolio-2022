import React, { Component } from "react";
import "./resume.component.css";
export default class Resume extends Component {
  render() {
    return (
      <section className="mt-5">
        <article className="d-flex justify-content-center text-bold">
          <span className="menu-header text-primary">RESUME</span>
        </article>
        <div className="d-xl-flex text-primary">
          <div className="col-xl-6 border mt-5">
            <h2>EDUCATION</h2>
            <section className="timeline ">
              <div className="mb-5 position-relative">
                <h5 className="text-secondary">2017</h5>
                <h5 className="text-primary text-bold">SEE</h5>
                <p>
                  I obtained my SEE certification from L.R.I School after
                  completion of grade 10. And on the same year I started my
                  journey to Web Development.
                </p>
              </div>
              <div className="mb-5 position-relative">
                <h5 className="text-secondary">2018-2021</h5>
                <h5 className="text-primary text-bold">High School</h5>
                <p>
                  I completed my highschool from management with (Computer
                  Science) as major from Ed-Mark Academy.
                </p>
              </div>
              <div className="mb-5 position-relative">
                <h5 className="text-secondary">2021-Present</h5>
                <h5 className="text-primary text-bold">Bachelors</h5>
                <p>
                  I am currently a undergraduate bachelors student learning at
                  United College, Kumaripati. With the major of Computer
                  Application (BCA)
                </p>
              </div>
            </section>
          </div>
          <div className="col-xl-6 border mt-5">
            <h2>EXPERIENCE</h2>
            <section className="timeline ">
              <div className="mb-5 position-relative">
                <h5 className="text-secondary">2017</h5>
                <h5 className="text-primary text-bold">Beginning of Journey</h5>
                <p>
                  I started learning HTML & CSS from some books and other
                  sources without any specific path.
                </p>
              </div>
              <div className="mb-5 position-relative">
                <h5 className="text-secondary">2021 Jan 6 - 2021 Feb 25</h5>
                <h5 className="text-primary text-bold">Front End Journey</h5>
                <p>
                  After all the struggle and inspecific path, I finally got a
                  chance to take front end development course on the middle of
                  pandemic from a Educational Institute.
                </p>
              </div>
              <div className="mb-5 position-relative">
                <h5 className="text-secondary">2021 Jan 20</h5>
                <h5 className="text-primary text-bold">First Portfolio</h5>
                <p>
                  Started creating my first portfolio using just HTML, CSS &
                  Jquery. Took me over 2 weeks to complete it. But since it was
                  completely built without any vision and for the matter of
                  testing the skills and problem solving abilities. It had
                  really bad UI with many features.
                </p>
              </div>
              <div className="mb-5 position-relative">
                <h5 className="text-secondary">2021 Dec 12</h5>
                <h5 className="text-primary text-bold">New Portfolio</h5>
                <p>
                  Now here I am creating a brand new portfolio for for which I
                  first designed the UI using FIGMA, to get the idea on how it
                  would look like after hard coding. By the way its been 2
                  months since I completed my backend course. But as we all know
                  that only learning is not the proof of being able to actually
                  use backend. It takes time to master it and develop some real
                  stuff. So its currently work in progress and I am trying
                  starting from Login and Registration system and well as small
                  playthrough with STATES & PROPS of React Class Component used
                  in Contact Page.
                </p>
              </div>
            </section>
          </div>
        </div>
        <hr className="m-5"></hr>
      </section>
    );
  }
}
