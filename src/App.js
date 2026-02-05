import Navbar from "./componant/Navbar";
import Footer from "./componant/Footer";
import Model from "./componant/Model";
import { useState, useEffect } from "react";

import MiddleSection from "./componant/Middlesection";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Skill from "./componant/Skills";
import Project from "./componant/Project";
import Main from "./componant/Mainpage";

function App() {
  const [show, setShow] = useState(false);
  const showEvent = () => {
    setShow(!show);
  };

  useEffect(() => {
    // Scroll Reveal Logic
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, observerOptions);

    const applyReveal = () => {
      const revealElements = document.querySelectorAll(".reveal");
      revealElements.forEach((el) => observer.observe(el));
    };

    applyReveal();
    // Observe DOM changes to re-apply reveal on route changes
    const mutationObserver = new MutationObserver(applyReveal);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    // Advanced Cursor Logic (Antigravity Style)
    const cursorDot = document.createElement("div");
    const cursorRing = document.createElement("div");
    cursorDot.className = "cursor-dot";
    cursorRing.className = "cursor-ring";
    document.body.appendChild(cursorDot);
    document.body.appendChild(cursorRing);

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.transform = `translate3d(${mouseX - 3}px, ${mouseY - 3}px, 0)`;
    };

    const animateRing = () => {
      // Lerp for smooth lag effect
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      cursorRing.style.transform = `translate3d(${ringX - 20}px, ${ringY - 20}px, 0)`;
      requestAnimationFrame(animateRing);
    };
    animateRing();

    const handleInteraction = (e) => {
      const isInteractive = e.target.closest('a, button, [role="button"]');
      if (isInteractive) {
        document.body.classList.add("cursor-active");
      } else {
        document.body.classList.remove("cursor-active");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleInteraction);

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleInteraction);
      if (document.body.contains(cursorDot))
        document.body.removeChild(cursorDot);
      if (document.body.contains(cursorRing))
        document.body.removeChild(cursorRing);
    };
  }, []);

  return (
    <div className="bg-dark-bg min-h-screen text-white">
      <Main />
    </div>
  );
}

export default App;
