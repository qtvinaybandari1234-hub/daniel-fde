import { WaLink } from "./Links.jsx";

export default function Mentor() {
  return (
    <section className="dark" id="mentor">
      <div className="wrap mentor">
        <div className="avatar" aria-hidden="true">AM</div>
        <div>
          <p className="eyebrow cyan">TRANSFORMING PROFESSIONALS INTO AI INNOVATORS</p>
          <h2>Learn from Experience.</h2>
          <h3>Arjun Mehta <small className="muted">· Lead Trainer, Smartgrow Infotech</small></h3>
          <p className="muted">With 15+ years of IT experience, Arjun is a trainer in Data Science, LLMs, Generative AI and Agentic AI. He emphasizes hands-on, industry-oriented learning that bridges academic concepts and real-world applications. (Sample profile — replace with your mentor's details.)</p>
          <div className="two">
            <div><h4>Certifications & credentials</h4><ul className="dots"><li>Sample Certified Data Scientist</li><li>Sample Certified GenAI Engineer</li><li>Sample Certified Python Programmer</li></ul></div>
            <div><h4>Specialties & expertise</h4><ul className="dots"><li>Data Science, AI & Generative AI</li><li>Prompt Engineering & Agentic AI</li><li>Python Programming & AI Testing</li></ul></div>
          </div>
          <WaLink>Chat on WhatsApp →</WaLink>
        </div>
      </div>
    </section>
  );
}
