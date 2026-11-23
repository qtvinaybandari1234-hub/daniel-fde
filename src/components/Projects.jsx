import { PHASES, MINIS } from "../data/content.js";

const titles = PHASES.flatMap((p) => p[2]).map((m) => m[2]);

export default function Projects() {
  return (
    <section className="dark deep" id="projects">
      <div className="wrap">
        <p className="eyebrow pink">PROJECTS & CAPSTONE</p>
        <h2>Learn by Building Real Solutions.</h2>
        <div className="capstone">
          <p className="eyebrow sun">MODULE 23 · CAPSTONE</p><h3>OmniGuard</h3><p className="lead">Enterprise AI Field Service Platform</p>
          <p className="muted">One project that brings the whole program together — from customer discovery and BRD/TDD to a secured, deployed and monitored enterprise AI platform.</p>
          <ol className="steps"><li>Discover</li><li>Design</li><li>Build</li><li>Integrate</li><li>Secure</li><li>Deploy</li><li>Monitor</li></ol>
          <div className="cards3 tight">
            <div className="card"><h4>Business & AI Engineering</h4><ul className="dots"><li>Customer discovery</li><li>AS-IS / TO-BE</li><li>BRD & TDD</li><li>LLM + RAG</li><li>Hybrid retrieval & reranking</li><li>Agentic workflows</li></ul></div>
            <div className="card"><h4>Full-Stack & Enterprise</h4><ul className="dots"><li>React frontend</li><li>FastAPI backend</li><li>PostgreSQL / Redis</li><li>ERP / SAP integration</li><li>REST / OData</li><li>Legacy integration</li><li>MCP</li></ul></div>
            <div className="card"><h4>Production & Security</h4><ul className="dots"><li>Multimodal document intelligence</li><li>OCR / images / voice</li><li>SSO / RBAC</li><li>Tenant isolation</li><li>Docker / Kubernetes</li><li>CI/CD</li><li>LLMOps & evaluation</li><li>Monitoring & cost control</li></ul></div>
          </div>
        </div>
        <h3 className="mt">Mini-projects in every module</h3>
        <div className="cards3 tight">
          {MINIS.map((d, i) => d && (
            <div className="card mini" key={i}><small>MODULE {String(i + 1).padStart(2, "0")}</small><h4>{titles[i]}</h4><p>{d}</p></div>
          ))}
        </div>
      </div>
    </section>
  );
}
