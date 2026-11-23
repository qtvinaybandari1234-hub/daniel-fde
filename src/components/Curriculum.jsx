import { useState } from "react";
import { PHASES, MINIS, MOD1 } from "../data/content.js";
import { WaLink, IgLink } from "./Links.jsx";

const TOTAL = 24;
const ALL = PHASES.flatMap((p) => p[2]);

export default function Curriculum() {
  const [open, setOpen] = useState(() => Array.from({ length: TOTAL }, (_, i) => i === 0));
  const count = open.filter(Boolean).length;
  const toggle = (i) => setOpen((o) => o.map((v, k) => (k === i ? !v : v)));
  const toggleAll = () => setOpen(Array(TOTAL).fill(count !== TOTAL));
  let num = 0;

  return (
    <section className="dark" id="curriculum">
      <div className="wrap">
        <p className="eyebrow cyan">COMPLETE CURRICULUM</p>
        <h2>24 modules. 8 phases. One path.</h2>
        <p className="sub light">The full syllabus of the AI Forward Deployed Engineer program, in order.</p>
        <p className="muted small"><span>{count} of 24 expanded</span> · <button className="linkbtn" onClick={toggleAll}>{count === TOTAL ? "Collapse all" : "Expand all"}</button></p>
        <div>
          {PHASES.map(([rn, name, list]) => (
            <div className="phase" key={rn}>
              <small>PHASE {rn}</small>
              <h3>{name}</h3>
              {list.map(([t, s]) => {
                num++;
                const i = num - 1;
                const n = String(num).padStart(2, "0");
                const isOpen = open[i];
                const proj = ALL[i][2];
                return (
                  <div className={"mod" + (isOpen ? " open" : "")} key={n}>
                    <button aria-expanded={isOpen} onClick={() => toggle(i)}>
                      <span className="n">{n}</span>
                      <span><strong>{t}</strong><span className="s">{s}</span></span>
                      <span className="chev">⌄</span>
                    </button>
                    <div className="body">
                      {num === 1
                        ? MOD1.map(([g, items]) => (<div key={g}><h5>{g}</h5><ul className="dots">{items.map((x) => <li key={x}>{x}</li>)}</ul></div>))
                        : <p>{s}. Detailed topic list for this module is shared by the team on request.</p>}
                      {MINIS[i]
                        ? <div className="mp"><b>Mini-project — {proj}:</b> {MINIS[i]}</div>
                        : <div className="mp"><b>Capstone — OmniGuard:</b> the whole program, end to end.</div>}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        <div className="ask">
          <h3>Want to Know More? Chat with Us →</h3>
          <p>Ask about duration, schedule, fees and enrolment directly with the team.</p>
          <div className="cta"><WaLink>Chat on WhatsApp →</WaLink><IgLink>Connect on Instagram ↗</IgLink></div>
        </div>
      </div>
    </section>
  );
}
