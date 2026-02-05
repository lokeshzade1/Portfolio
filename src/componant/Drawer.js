import { useEffect } from "react";
import { VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";

function Drawer(props) {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  return (
    <>
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[250] md:hidden"
        onClick={props.openDrawer}
      ></div>
      <div className="fixed right-0 top-0 w-[80%] max-w-sm h-screen bg-dark-bg/95 border-l border-white/10 z-[300] md:hidden py-32 px-10 flex flex-col items-center animate-slide-in">
        <button
          className="text-3xl text-white/50 hover:text-cyan-glow absolute top-10 right-8 cursor-pointer transition-colors"
          onClick={props.openDrawer}
        >
          <VscClose />
        </button>

        <div className="relative group mb-10">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-glow to-purple-neon rounded-full blur opacity-50 animate-pulse-slow"></div>
          <div className="relative h-32 w-32 border border-cyan-glow/30 rounded-full overflow-hidden">
            <img
              src={require("./images/Snapchat-1630096252.jpg")}
              className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              alt="Profile"
            />
          </div>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-2xl font-bold text-white futuristic-font tracking-tight uppercase">
            Lokesh Zade
          </h1>
          <p className="text-cyan-glow/40 text-[10px] tracking-[0.4em] uppercase mt-1">
            Lead Engineer
          </p>
        </div>

        <nav className="w-full">
          <ul className="flex flex-col gap-8 items-center">
            {[
              { label: "Home_Base", href: "#about" },
              { label: "Tech_Logs", href: "#skills" },
              { label: "Project_Core", href: "#projects" },
              { label: "Timeline_Seq", href: "#experience" },
            ].map((item) => (
              <li key={item.href} className="w-full text-center">
                <a
                  href={item.href}
                  onClick={props.openDrawer}
                  className="text-xl font-bold text-white/60 hover:text-cyan-glow tracking-[0.2em] uppercase transition-all inline-block hover:scale-110"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="absolute bottom-10 w-full text-center">
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-glow to-purple-neon mx-auto rounded-full opacity-20"></div>
          <p className="text-[8px] text-white/20 tracking-[0.5em] uppercase mt-4">
            System_Online_V2
          </p>
        </div>
      </div>
    </>
  );
}

export default Drawer;
