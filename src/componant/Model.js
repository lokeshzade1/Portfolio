import { useEffect } from "react";
import { VscClose } from "react-icons/vsc";

function Model(props) {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  return (
    <>
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[200] flex justify-center items-center p-4"
        onClick={props.show}
      >
        <div
          className="w-full max-w-lg glass rounded-3xl border-cyan-glow/20 p-8 relative animate-fade-in"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-6 right-6 text-white/50 hover:text-cyan-glow text-2xl transition-colors"
            onClick={props.show}
          >
            <VscClose />
          </button>

          <div className="mb-8">
            <h2 className="text-3xl font-bold futuristic-font text-white uppercase italic">
              Initialize_Contact
            </h2>
            <p className="text-cyan-glow/40 tracking-[0.3em] uppercase text-[10px] mt-1">
              Secure Uplink Protocol
            </p>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-white/40 block ml-2">
                Identity_ID
              </label>
              <input
                type="text"
                placeholder="ENTER_NAME"
                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-cyan-glow/50 outline-none transition-all placeholder:text-white/10"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-white/40 block ml-2">
                Comms_Channel
              </label>
              <input
                type="email"
                placeholder="EMAIL_ADDRESS"
                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-cyan-glow/50 outline-none transition-all placeholder:text-white/10"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-white/40 block ml-2">
                Intelligence_Data
              </label>
              <textarea
                placeholder="INPUT_MESSAGE"
                rows="4"
                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-cyan-glow/50 outline-none transition-all placeholder:text-white/10 resize-none"
              ></textarea>
            </div>

            <button className="w-full py-4 bg-gradient-to-r from-cyan-glow/20 to-purple-neon/20 border border-cyan-glow/30 rounded-xl text-white font-bold tracking-[0.2em] uppercase hover:border-cyan-glow transition-all group overflow-hidden relative">
              <span className="relative z-10">Transmit_Signal</span>
              <div className="absolute inset-0 bg-cyan-glow/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Model;
