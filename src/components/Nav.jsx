import { useEffect, useState } from "react";
import { WaLink } from "./Links.jsx";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 20);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header className={"nav" + (scrolled ? " scrolled" : "")} id="nav">
      <div className="nav-in">
        <a className="brand" href="#top">
          <span className="logo"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 18 L11 11 L14 14 L20 6" /><path d="M14 6 H20 V12" /></svg></span>
          <span><b className="brand-name">SDE2<i>FDE</i></b><small>POWERED BY SMARTGROW INFOTECH</small></span>
        </a>
        <nav className="links">
          <a href="#what">What Is FDE?</a><a href="#curriculum">Curriculum</a><a href="#projects">Projects</a><a href="#mentor">Mentor</a><a href="#roadmap">Career Path</a><a href="#faq">FAQ</a>
        </nav>
        <WaLink>Chat on WhatsApp</WaLink>
      </div>
    </header>
  );
}
