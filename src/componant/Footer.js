import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

function Footer() {
  const date = new Date();

  return (
    <footer className="w-full py-20 glass border-t border-cyan-glow/10 flex flex-col items-center px-6 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-6xl mb-16 reveal">
        <div className="flex flex-col gap-4">
          <h3 className="text-3xl font-bold futuristic-font text-cyan-glow">
            LOKESH ZADE
          </h3>
          <p className="text-white/40 text-sm leading-relaxed max-w-xs">
            Engineering the future of web and mobile intelligence. Available for
            high-stakes digital architecture and consultation.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-bold tracking-[0.3em] text-white uppercase">
            Network Nodes
          </h4>
          <div className="flex gap-6 text-2xl text-white/50">
            <a
              href="https://github.com/lokeshzade1"
              className="hover:text-cyan-glow transition-all duration-300 transform hover:-translate-y-1"
            >
              <FaGithub />
            </a>
            <a
              href="#"
              className="hover:text-cyan-glow transition-all duration-300 transform hover:-translate-y-1"
            >
              <BsInstagram />
            </a>
            <a
              href="#"
              className="hover:text-cyan-glow transition-all duration-300 transform hover:-translate-y-1"
            >
              <BsLinkedin />
            </a>
            <a
              href="#"
              className="hover:text-cyan-glow transition-all duration-300 transform hover:-translate-y-1"
            >
              <BsTwitter />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-bold tracking-[0.3em] text-white uppercase">
            Contact Protocol
          </h4>
          <p className="text-cyan-glow text-lg font-medium">
            zadelokesh1@gmail.com
          </p>
          <p className="text-white/40 text-sm tracking-widest">
            ENCRYPTED_LINE: +91 848XXXXXXX
          </p>
        </div>
      </div>

      <div className="w-full border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] tracking-[0.4em] text-white/20 uppercase">
        <p>© {date.getFullYear()} LOKESH_CORE_IDENTITY</p>
        <p>ALL_RIGHTS_RESERVED // SYSTEM_VERSION_2.0</p>
      </div>
    </footer>
  );
}

export default Footer;
