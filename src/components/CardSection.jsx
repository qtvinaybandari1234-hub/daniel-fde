import { WHY, OVERVIEW } from "../data/sections.js";

const Card = ([ic, t, p, bg]) => (
  <div className="card" key={t}>
    <div className="ic" style={bg ? { background: bg } : undefined}>{ic}</div>
    <h3>{t}</h3>
    <p>{p}</p>
  </div>
);

export function Why() {
  return (
    <section className="dark deep">
      <div className="wrap">
        <p className="eyebrow pink">WHY FORWARD DEPLOYED ENGINEERING?</p>
        <h2>Engineering Is Moving <span className="g-vp">Beyond Code.</span></h2>
        <div className="cards4">{WHY.map(Card)}</div>
      </div>
    </section>
  );
}

export function Aim() {
  return (
    <section className="aim" id="aim">
      <div className="wrap center">
        <p className="eyebrow sun">AIM HIGHER</p>
        <h2 className="huge">Your Next Career Chapter Starts Here.</h2>
        <p className="salary">₹70 LPA</p>
        <p className="fine">An aspirational benchmark, not a typical or guaranteed outcome. Career results depend on skills, experience, employer, market conditions and individual performance.</p>
        <a className="btn btn-dark" href="#roadmap">Discover the FDE Skill Path →</a>
      </div>
    </section>
  );
}

export function Overview() {
  return (
    <section className="dark deep" id="roadmap">
      <div className="wrap">
        <p className="eyebrow sun">PROGRAM OVERVIEW</p>
        <h2>Your Roadmap to Forward Deployed Engineering.</h2>
        <div className="cards3">{OVERVIEW.map(Card)}</div>
        <p className="muted small">Duration, schedule, fees and batch dates aren't listed here — ask the team on WhatsApp or Instagram.</p>
        <a className="btn btn-ghost" href="#curriculum">View the full curriculum ↓</a>
      </div>
    </section>
  );
}
