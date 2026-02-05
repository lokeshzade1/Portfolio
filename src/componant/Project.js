import { FaNodeJs } from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiMongoose } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { TfiHtml5 } from "react-icons/tfi";
import { SiExpress } from "react-icons/si";

const Project = () => {
  return (
    <>
      <div className="w-full min-h-screen mesh-bg flex flex-col items-center py-20 px-4 md:px-20">
        <div className="text-center mb-20 reveal">
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter futuristic-font text-white relative inline-block">
            PROJECTS<span className="text-cyan-glow">.</span>
            <div className="absolute -top-6 -right-12 text-xs md:text-sm tracking-[0.5em] text-cyan-glow/30 uppercase italic">
              Protocol V.2
            </div>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl">
          {[
            {
              name: "Laundry Service App",
              tech: "React Native / Node.js / MongoDB",
              link: "#",
            },
            {
              name: "Swagstay Hotel Booking",
              tech: "Full Stack Web / Express",
              link: "#",
            },
            {
              name: "User Login System",
              tech: "React Native Expert Implementation",
              link: "#",
            },
            {
              name: "Instaclone Protocol",
              tech: "MERN Stack / Real-time",
              link: "#",
            },
          ].map((project, index) => (
            <div key={index} className="group relative reveal">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-glow/20 to-purple-neon/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-700"></div>
              <div className="relative glass rounded-3xl overflow-hidden border-white/5 group-hover:border-cyan-glow/20 transition-all duration-500">
                <div className="h-48 bg-gray-900/50 flex items-center justify-center p-8 overflow-hidden">
                  <div className="w-full h-full bg-cyan-glow/5 border border-cyan-glow/10 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                    <span className="text-4xl text-cyan-glow/20 font-bold tracking-widest">
                      DATA_LOG
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="text-xs text-cyan-glow mb-2 tracking-[0.3em] font-bold uppercase">
                    Phase 0{index + 1}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 futuristic-font">
                    {project.name}
                  </h3>
                  <p className="text-white/40 text-sm mb-6 font-light uppercase tracking-widest">
                    {project.tech}
                  </p>
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-white hover:text-cyan-glow transition-colors text-sm uppercase tracking-widest group/link"
                  >
                    Access Intelligence
                    <span className="transform translate-x-0 group-hover/link:translate-x-2 transition-transform">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
