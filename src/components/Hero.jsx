import { useState } from "react";
import { AREAS, ROOT } from "../data/content.js";
import FdeMap from "./FdeMap.jsx";
import { WaLink, IgLink } from "./Links.jsx";

export default function Hero() {
  const [active, setActive] = useState(-1);
  const a = active < 0 ? ROOT : AREAS[active];
  return (
    <section className="hero dark">
      <div className="grid-bg"></div>
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="eyebrow cyan">FORWARD DEPLOYED ENGINEER (FDE) PROGRAM · THE FUTURE IS HERE</p>
          <h1>Don’t Just Write Code. <span className="g-vp">Build What Comes Next.</span></h1>
          <p className="sde-fde"><s>SDE</s> <span className="arrow">→</span> <span className="g-fde">FDE</span></p>
          <p className="lead">An SDE builds features. An FDE owns the whole problem, from the first customer meeting to an AI system running in production. Tap the map to see everything an FDE deals with.</p>
          <div className="cta">
            <a className="btn btn-primary" href="#curriculum">Explore the Curriculum ↓</a>
            <WaLink>Chat on WhatsApp ↗</WaLink>
            <IgLink>Connect on Instagram ↗</IgLink>
          </div>
          <p className="powered">POWERED BY SMARTGROW INFOTECH</p>
        </div>
        <div className="hero-map">
          <div className="map-card"><span className="chip"><i className="dot"></i>what an FDE deals with · tap a node</span><FdeMap active={active} onSelect={setActive} /></div>
          <div className="detail" aria-live="polite">
            <div className="top"><span>TAP ANY AREA TO EXPLORE</span><span>8 AREAS</span></div>
            <h3>{a.t}</h3>
            <p>{a.d}</p>
            <ul>{a.b.map((x) => <li key={x}>{x}</li>)}</ul>
            <div className="foot">
              {active < 0 ? <>Covered across all <b>24 modules</b> · capstone <b>OmniGuard</b></> : <>Learned in <b>{a.m}</b></>}
            </div>
          </div>
          <div className="pills">
            {AREAS.map((x, i) => (
              <button key={x.n} className={active === i ? "on" : ""} onClick={() => setActive(i)}><i style={{ background: x.c }}></i>{x.n}</button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
