import React from "react";
import {
  VscCode,
  VscDeviceMobile,
  VscRocket,
  VscShield,
} from "react-icons/vsc";

const Services = () => {
  const services = [
    {
      title: "Web Engineering",
      icon: <VscCode />,
      desc: "Building scalable, high-performance web applications using modern frameworks and best practices.",
    },
    {
      title: "Mobile Architecture",
      icon: <VscDeviceMobile />,
      desc: "Crafting native-like experiences for iOS and Android with optimized React Native codebases.",
    },
    {
      title: "System Security",
      icon: <VscShield />,
      desc: "Implementing robust security protocols and encrypted data flows to protect user intelligence.",
    },
    {
      title: "Cloud Deployment",
      icon: <VscRocket />,
      desc: "Scaling applications globally with automated CI/CD pipelines and cloud infrastructure.",
    },
  ];

  return (
    <div className="w-full py-20 border-t border-white/5 flex flex-col items-center px-6">
      <div className="text-center mb-16 reveal">
        <h2 className="text-4xl md:text-6xl font-bold futuristic-font text-white uppercase italic tracking-tighter">
          CAPABILITIES
        </h2>
        <p className="text-cyan-glow/40 tracking-[0.4em] uppercase mt-2 text-[10px]">
          Core Operational Protocols
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {services.map((service, index) => (
          <div key={index} className="group relative reveal">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-neon/20 to-cyan-glow/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-700"></div>
            <div className="relative glass p-10 rounded-3xl border-white/5 group-hover:border-cyan-glow/30 transition-all duration-500 flex flex-col gap-6">
              <div className="text-5xl text-cyan-glow group-hover:scale-110 transition-transform duration-500 group-hover:rotate-12">
                {service.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white futuristic-font tracking-wide">
                  {service.title}
                </h3>
                <p className="text-white/40 text-sm mt-3 leading-relaxed font-light">
                  {service.desc}
                </p>
              </div>
              <div className="w-12 h-0.5 bg-cyan-glow group-hover:w-full transition-all duration-700 opacity-20"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
