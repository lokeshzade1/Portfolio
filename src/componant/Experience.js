import React from "react";

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Bajaj Finery",
      period: "2023 - Present",
      desc: "Architecting high-performance web solutions and integrating complex payment gateways like CCAvenue.",
    },
    {
      title: "React Native Developer",
      company: "Mobile Solutions Ltd",
      period: "2022 - 2023",
      desc: "Developed and maintained cross-platform mobile applications with seamless UI/UX.",
    },
    {
      title: "Junior Web Developer",
      company: "Digital Agency",
      period: "2021 - 2022",
      desc: "Collaborated on various client projects focusing on responsive design and modern web standards.",
    },
  ];

  return (
    <div className="w-full py-20 mesh-bg flex flex-col items-center px-6">
      <div className="text-center mb-16 reveal">
        <h2 className="text-4xl md:text-6xl font-bold futuristic-font text-white">
          TIMELINE<span className="text-cyan-glow">_</span>
        </h2>
        <p className="text-white/40 tracking-widest uppercase mt-4 text-xs">
          Professional Journey Sequence
        </p>
      </div>

      <div className="relative w-full max-w-4xl">
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-glow to-purple-neon opacity-20"></div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`flex items-center w-full reveal ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
            >
              <div className="w-1/2"></div>
              <div className="z-20 flex items-center justify-center w-8 h-8 rounded-full glass border-cyan-glow/50 shadow-[0_0_15px_rgba(0,243,255,0.5)] bg-dark-bg">
                <div className="w-2 h-2 rounded-full bg-cyan-glow animate-ping"></div>
              </div>
              <div
                className={`w-1/2 p-6 glass rounded-2xl border-white/5 hover:border-cyan-glow/20 transition-all duration-500 m-4 ${index % 2 === 0 ? "text-right" : "text-left"}`}
              >
                <span className="text-cyan-glow text-xs font-bold tracking-widest">
                  {exp.period}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white mt-1 futuristic-font">
                  {exp.title}
                </h3>
                <h4 className="text-white/60 text-sm mt-1 uppercase">
                  {exp.company}
                </h4>
                <p className="text-white/40 text-sm mt-4 leading-relaxed font-light">
                  {exp.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
