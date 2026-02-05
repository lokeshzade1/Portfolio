import Navbar from "../componant/Navbar";
import Footer from "../componant/Footer";
import Model from "../componant/Model";
import { useState } from "react";
import MiddleSection from "../componant/Middlesection";
import Experience from "./Experience";
import Services from "./Services";
import Skill from "./Skills";
import Project from "./Project";

function Main() {
  const [show, setShow] = useState(false);
  const showEvent = () => {
    setShow(!show);
  };

  return (
    <>
      <Navbar show={showEvent} />
      <main>
        <div id="about">
          <MiddleSection />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="skills">
          <Skill />
        </div>
        <div id="projects">
          <Project />
        </div>
        <div id="experience">
          <Experience />
        </div>
      </main>
      <Footer />
      {show ? <Model show={showEvent} /> : null}
    </>
  );
}

export default Main;
