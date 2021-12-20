import Resume from "./resume/resume.component";
import Contact from "./contact-page/contact.page.component";
import AboutMe from "./about-me-page/aboutme.component";
import Home from "./home-page/home.component";
import "./body.component.css";

function Body() {
  return (
    <section className="container">
      <Home />
      <AboutMe />
      <Resume />
      <Contact />
    </section>
  );
}

export default Body;
