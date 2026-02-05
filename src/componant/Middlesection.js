import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import { GiClover } from "react-icons/gi";
import { PiHeartStraightFill } from "react-icons/pi";
import { GrReactjs } from "react-icons/gr";
import { FaTwitterSquare } from "react-icons/fa";
import { VscSettings } from "react-icons/vsc";
import Drawer from "./Drawer";
import { useState } from "react";
const MiddleSection = () => {
  const date = new Date();
  console.log(date.getFullYear());
  const [open, setOpen] = useState(false);
  const openDrawer = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="w-full min-h-screen flex items-center mesh-bg md:justify-between flex-wrap md:mt-0 pt-20 flex-col md:flex-row gap-10 md:gap-20 px-4 md:px-20">
        {/* Mobile Nav Fix - Handled by Navbar.js now */}

        <div className="relative group reveal">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-glow to-purple-neon rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
          <div className="relative h-64 w-64 md:h-96 md:w-96 border-2 border-cyan-glow/30 shadow-2xl shadow-cyan-glow/20 rounded-full overflow-hidden">
            <img
              src={require("./images/Snapchat-1630096252.jpg")}
              className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 hover:scale-100"
              alt="Profile"
            />
          </div>
        </div>

        <div className="text-white flex-1 max-w-2xl reveal">
          <h1 className="text-5xl font-bold md:text-8xl tracking-tighter futuristic-font animate-fade-in">
            HI<span className="text-cyan-glow">.</span>
          </h1>
          <h2 className="text-3xl font-bold md:text-6xl text-neon-cyan mt-2 futuristic-font">
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString("I AM LOKESH").pauseFor(2500).start();
              }}
            />
          </h2>

          <div className="flex items-center gap-4 mt-8">
            <div className="flex justify-center items-center animate-spin-slow text-4xl md:text-5xl text-cyan-glow">
              <GrReactjs />
            </div>
            <div className="text-lg md:text-2xl font-light tracking-widest uppercase text-white/80">
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Architect",
                    "React Native Expert",
                    "UI/UX Visionary",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                }}
              />
            </div>
          </div>

          <div className="glass p-6 rounded-2xl border-cyan-glow/10 mt-8 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-cyan-glow"></div>
            <p className="text-white/70 leading-relaxed font-light">
              Detail-oriented Full Stack Developer specializing in building
              high-performance web and mobile applications. Dedicated to pushing
              the boundaries of modern technology and creating seamless digital
              experiences.
            </p>
          </div>

          <div className="flex gap-8 text-2xl text-white/50 reveal delay-300">
            <a
              href="https://github.com/lokeshzade1"
              className="hover:text-cyan-glow transition-all transform hover:-translate-y-1"
            >
              <FaGithub />
            </a>
            <a
              href="#"
              className="hover:text-cyan-glow transition-all transform hover:-translate-y-1"
            >
              <BsInstagram />
            </a>
            <a
              href="#"
              className="hover:text-cyan-glow transition-all transform hover:-translate-y-1"
            >
              <BsLinkedin />
            </a>
            <a
              href="#"
              className="hover:text-cyan-glow transition-all transform hover:-translate-y-1"
            >
              <BsTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="w-full max-w-4xl mx-auto px-4 pb-32 reveal">
        <div className="glass p-10 md:p-16 rounded-[40px] border-white/5 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-2 h-full bg-cyan-glow opacity-20 group-hover:w-full transition-all duration-700 pointer-events-none"></div>
          <div className="relative z-10">
            <h3 className="text-cyan-glow text-xs font-bold tracking-[0.5em] uppercase mb-6">
              Core_Intelligence_Brief
            </h3>
            <p className="text-lg md:text-2xl text-white/80 leading-relaxed font-light">
              A visionary{" "}
              <span className="text-white font-bold italic underline decoration-purple-neon/50">
                Full Stack Architect
              </span>{" "}
              specializing in the construction of high-integrity digital
              systems. Expert in React Native engineering and modern web
              protocols.
            </p>
            <button
              className="mt-12 group/btn flex items-center gap-4 text-white text-sm tracking-[0.3em] uppercase font-bold hover:text-cyan-glow transition-colors"
              onClick={() =>
                document.getElementById("projects").scrollIntoView()
              }
            >
              Access_Project_Logs
              <span className="w-12 h-[1px] bg-white/20 group-hover/btn:w-20 group-hover/btn:bg-cyan-glow transition-all duration-500"></span>
            </button>
          </div>
        </div>
      </div>
      {open ? <Drawer openDrawer={openDrawer} /> : null}
    </>
  );
};
export default MiddleSection;
