import { useState } from "react";
import { FAQ } from "../data/content.js";

export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="dark deep" id="faq">
      <div className="wrap narrow">
        <p className="eyebrow cyan">FAQ</p>
        <h2>Questions, answered.</h2>
        <div>
          {FAQ.map(([q, a], i) => (
            <div className={"faq" + (open === i ? " open" : "")} key={q}>
              <button aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}><span>{q}</span><span className="pl">+</span></button>
              <div className="a">{a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
