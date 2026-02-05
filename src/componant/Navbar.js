import { useState } from "react";
import PhoneBlock from "./Phoneblock";
import { VscSettings, VscClose, VscMenu } from "react-icons/vsc"; // Added VscClose and VscMenu
// Removed Link import as it's no longer used
// Assuming Drawer component is defined elsewhere or will be added
// Assuming openDrawer function is defined elsewhere or will be added
function Navbar(props) {
  const [shoNo, setShowNo] = useState(false); // Kept for shoNo state
  // Assuming openDrawer function is defined, for now, let's define a placeholder if not provided
  const openDrawer = () => setShowNo(!shoNo);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[100] glass border-b border-white/5 py-6 px-10 flex justify-between items-center transition-all duration-300">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-glow to-purple-neon p-[1px] group-hover:rotate-12 transition-transform duration-500">
            <div className="w-full h-full bg-dark-bg rounded-lg flex items-center justify-center">
              <span className="text-cyan-glow font-bold text-lg">L</span>
            </div>
          </div>
          <span className="text-white font-bold tracking-tighter text-xl futuristic-font">
            LOKESH_ZADE
          </span>
        </div>
        <div className="hidden md:flex items-center gap-12">
          <ul className="flex gap-10 text-[11px] font-bold tracking-[0.3em] uppercase text-white/50">
            <li className="hover:text-cyan-glow cursor-pointer transition-colors relative group">
              <a href="#about">Home_Base</a>
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-cyan-glow transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="hover:text-cyan-glow cursor-pointer transition-colors relative group">
              <a href="#skills">Tech_Logs</a>
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-cyan-glow transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="hover:text-cyan-glow cursor-pointer transition-colors relative group">
              <a href="#projects">Project_Core</a>
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-cyan-glow transition-all duration-300 group-hover:w-full"></span>
            </li>
          </ul>

          <button
            onClick={props.show}
            className="bg-white/5 border border-white/10 hover:border-cyan-glow/50 py-3 px-8 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase text-white transition-all hover:shadow-[0_0_15px_rgba(0,243,255,0.2)]"
          >
            Terminal_Access
          </button>
        </div>
        <button className="md:hidden text-white text-3xl" onClick={openDrawer}>
          {shoNo ? <VscClose /> : <VscMenu />}
        </button>
        {shoNo && <PhoneBlock />}{" "}
        {/* Replaced Drawer with PhoneBlock based on original usage of shoNo */}
      </nav>
    </>
  );
}

export default Navbar;
