import { FaNodeJs } from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiMongoose } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { TfiHtml5 } from "react-icons/tfi";
import { SiExpress } from "react-icons/si";

const Skill = () => {
  return (
    <>
      <div className="w-full min-h-screen mesh-bg flex flex-col items-center justify-center p-8 md:p-20">
        <div className="text-center mb-16 reveal">
          <h1 className="text-5xl md:text-7xl font-bold italic tracking-tighter futuristic-font text-white inline-block relative">
            TECH STACK
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-glow to-transparent opacity-50 shadow-[0_5px_15px_-5px_rgba(0,243,255,0.8)]"></span>
          </h1>
          <p className="mt-6 text-white/40 tracking-[0.3em] uppercase text-xs md:text-sm font-light">
            Decentralized Intelligence & Core Protocols
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
          {[
            {
              name: "NODE.JS",
              icon: <FaNodeJs />,
              color: "text-green-500",
              glow: "shadow-green-500/20",
            },
            {
              name: "JAVASCRIPT",
              icon: <BiLogoJavascript />,
              color: "text-yellow-400",
              glow: "shadow-yellow-400/20",
            },
            {
              name: "TAILWIND",
              icon: <SiTailwindcss />,
              color: "text-cyan-400",
              glow: "shadow-cyan-400/20",
            },
            {
              name: "GITHUB",
              icon: <FaGithub />,
              color: "text-white",
              glow: "shadow-white/20",
            },
            {
              name: "MONGODB",
              icon: <SiMongodb />,
              color: "text-green-400",
              glow: "shadow-green-400/20",
            },
            {
              name: "MONGOOSE",
              icon: <SiMongoose />,
              color: "text-red-500",
              glow: "shadow-red-500/20",
            },
            {
              name: "REACT",
              icon: <TbBrandReactNative />,
              color: "text-blue-400",
              glow: "shadow-blue-400/20",
            },
            {
              name: "EXPRESS",
              icon: <SiExpress />,
              color: "text-white/80",
              glow: "shadow-white/10",
            },
          ].map((skill, index) => (
            <div key={index} className="group relative reveal">
              <div
                className={`absolute -inset-0.5 bg-gradient-to-br from-cyan-glow/20 to-purple-neon/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500`}
              ></div>
              <div className="relative glass p-8 rounded-2xl flex flex-col items-center justify-center gap-4 transition-all duration-300 group-hover:-translate-y-2 border-white/5 group-hover:border-cyan-glow/30">
                <div
                  className={`text-5xl md:text-6xl ${skill.color} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}
                >
                  {skill.icon}
                </div>
                <h3 className="text-xs md:text-sm font-bold tracking-[0.2em] text-white/60 group-hover:text-cyan-glow transition-colors">
                  {skill.name}
                </h3>
                <div className="w-full h-1 bg-white/5 rounded-full mt-2 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-transparent to-cyan-glow w-[85%] rounded-full shadow-[0_0_10px_rgba(0,243,255,0.5)]"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

{
  /* <BiLogoJavascript className='text-yellow-400' />
            <SiTailwindcss className='text-blue-700' />
            <FaGithub className='text-black bg-white' />
            <SiMongodb className='text-green-700' />
            <SiMongoose className='text-red-700' />
            <TbBrandReactNative className='text-blue-400' />
            <TfiHtml5 />
            <SiExpress /> */
}

export default Skill;
