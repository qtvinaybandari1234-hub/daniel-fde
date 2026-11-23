import { TECH, WHO, OUTCOMES, JOURNEY } from "../data/sections.js";

export function Tech() {
  return (
    <section className="dark deep">
      <div className="wrap">
        <p className="eyebrow cyan">TECHNOLOGY ECOSYSTEM</p>
        <h2>Connect AI to the Real World.</h2>
        <div className="tech">
          {TECH.map(([t, l]) => (
            <div key={t}><h4>{t}</h4><div className="tags">{l.split(",").map((x) => <span key={x}>{x}</span>)}</div></div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Who() {
  return (
    <section className="paper">
      <div className="wrap">
        <p className="eyebrow violet">WHO IS THIS FOR?</p>
        <h2>Built for engineers ready to go further.</h2>
        <div className="cards3 light">
          {WHO.map(([t, p]) => <div className="card" key={t}><h3>{t}</h3><p>{p}</p></div>)}
        </div>
        <p className="small pm">Prerequisites and eligibility aren't specified here — please confirm with the team.</p>
      </div>
    </section>
  );
}

export function Outcomes() {
  return (
    <section className="dark deep">
      <div className="wrap">
        <p className="eyebrow sun">LEARNING OUTCOMES</p>
        <h2>Build Skills That Go Beyond Coding.</h2>
        <ol className="outcomes">{OUTCOMES.map((x) => <li key={x}>{x}</li>)}</ol>
      </div>
    </section>
  );
}

export function Journey() {
  return (
    <section className="dark">
      <div className="wrap">
        <p className="eyebrow pink">THE LEARNING JOURNEY</p>
        <h2>One path, five big moves.</h2>
        <div className="journey">
          {JOURNEY.map(([t, p], i) => <div key={t}><b>0{i + 1}</b><h4>{t}</h4><p>{p}</p></div>)}
        </div>
        <h3 className="mt">Career pathways to explore</h3>
        <div className="tags"><span>Forward Deployed Engineer</span><span>Full-Stack AI Engineer</span><span>GenAI / LLM Engineer</span><span>AI Agent Engineer</span><span>AI Solutions Engineer</span></div>
        <p className="muted small">Role titles vary by employer. The program builds skills relevant to these paths; it does not guarantee a specific role.</p>
      </div>
    </section>
  );
}
