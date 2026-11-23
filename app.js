// ---- Configuration (replace placeholders) ----
const CONFIG = {
  whatsappNumber: "916304429198",
  instagram: "https://instagram.com/bandarivinay.ai",
  waText: "Hi! I found the Forward Deployed Engineer (FDE) career upgrade program and I'm interested in joining. Could you please share the next steps — batch dates, duration, fees and how to enrol? Thank you!"
};

const $ = (s) => document.querySelector(s);
const h = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };

document.querySelectorAll("[data-wa]").forEach(a => { a.href = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(CONFIG.waText)}`; a.target = "_blank"; a.rel = "noopener"; });
document.querySelectorAll("[data-ig]").forEach(a => { a.href = CONFIG.instagram; a.target = "_blank"; a.rel = "noopener"; });
addEventListener("scroll", () => $("#nav").classList.toggle("scrolled", scrollY > 20), { passive: true });

// ---- FDE map ----
const AREAS = [
  { n: "Customers", t: "Customers & stakeholders", c: "oklch(72% .19 150)", d: "FDEs sit with the customer. They run discovery sessions, learn how the business really works, and keep everyone aligned from kickoff to launch.", b: ["Discovery workshops", "Stakeholder demos", "Client presentations", "Feedback loops"], m: "Module 18 · Module 20" },
  { n: "Business problems", t: "Business problems & specs", c: "oklch(85% .17 90)", d: "Turn a vague request into a clear problem: map how work happens today, design the better version, and write the specs engineers build from.", b: ["AS-IS / TO-BE process maps", "BRD & TDD", "Success metrics", "Scope & estimates"], m: "Module 18 · Module 19" },
  { n: "LLMs & prompts", t: "LLMs & prompt engineering", c: "oklch(65% .26 0)", d: "Pick the right model for the job and make it dependable: clear prompts, structured outputs, and an eye on cost and speed.", b: ["Model selection", "Prompt engineering", "Structured JSON output", "Token cost control"], m: "Module 08" },
  { n: "Data & RAG", t: "Company data & RAG", c: "oklch(82% .15 215)", d: "Connect AI to the company's own knowledge, from documents and databases to search, so answers are grounded and cite their sources.", b: ["Vector search", "Hybrid retrieval & reranking", "PDFs, OCR & images", "SQL & data pipelines"], m: "Module 03 · Module 09 · Module 12" },
  { n: "Agents & MCP", t: "AI agents & MCP tools", c: "oklch(60% .25 285)", d: "Build agents that take action, not just answer questions: tool calling, multi-agent workflows and MCP connectors, with a person approving the risky steps.", b: ["Tool calling", "LangGraph workflows", "MCP servers", "Human-in-the-loop approval"], m: "Module 10 · Module 11" },
  { n: "Enterprise systems", t: "Enterprise systems", c: "oklch(74% .18 55)", d: "Plug AI into the systems companies already run on, old ones included, without breaking security or access rules.", b: ["SAP & ERP", "Salesforce & ServiceNow", "Legacy APIs", "SSO & role-based access"], m: "Module 15 · Module 16" },
  { n: "Security & evals", t: "Security & quality", c: "oklch(68% .22 20)", d: "Keep AI safe and measurable: block harmful inputs, test against attacks, and track quality, speed and cost once it is live.", b: ["Guardrails", "Red teaming", "Evaluations", "Monitoring dashboards"], m: "Module 13 · Module 14" },
  { n: "Deploy & go-live", t: "Deployment & go-live", c: "oklch(57% .22 263)", d: "Ship it and keep it running: containers, pipelines, user testing, launch day and the support weeks that follow.", b: ["Docker & Kubernetes", "CI/CD pipelines", "UAT & go-live", "Hypercare & incidents"], m: "Module 07 · Module 21 · Module 22" },
];
const ROOT = { t: "Forward Deployed Engineer", d: "An FDE works between the customer and the code. They own a real business problem from the first meeting to an AI system running in production, across all 8 areas on this map.", b: ["Customer-facing", "AI engineering", "Enterprise integration", "Production delivery"] };
let active = -1;

function drawMap() {
  const svg = $("#map"), NS = "http://www.w3.org/2000/svg", cx = 250, cy = 215, R = 150;
  svg.innerHTML = "";
  const pos = AREAS.map((_, i) => { const a = -Math.PI / 2 + i * (2 * Math.PI / 8) + 0.0; return [cx + R * Math.cos(a) * 1.15, cy + R * Math.sin(a) * 0.95]; });
  pos.forEach(([x, y], i) => { const l = document.createElementNS(NS, "line"); l.setAttribute("x1", cx); l.setAttribute("y1", cy); l.setAttribute("x2", x); l.setAttribute("y2", y); l.setAttribute("stroke", AREAS[i].c); l.setAttribute("stroke-opacity", active === i ? .9 : .35); svg.appendChild(l); });
  const core = document.createElementNS(NS, "g");
  core.innerHTML = `<circle cx="${cx}" cy="${cy}" r="34" fill="#0a0a24" stroke="oklch(60% .25 285)" stroke-width="3"/><circle cx="${cx}" cy="${cy}" r="42" fill="none" stroke="oklch(85% .17 90)" stroke-opacity=".5"/><text x="${cx}" y="${cy + 4}" style="font:700 14px Space Grotesk;fill:#fff">FDE</text>`;
  core.style.cursor = "pointer"; core.onclick = () => select(-1); svg.appendChild(core);
  pos.forEach(([x, y], i) => {
    const g = document.createElementNS(NS, "g"); g.setAttribute("class", "node" + (active === i ? " on" : "")); g.setAttribute("tabindex", 0); g.setAttribute("role", "button"); g.setAttribute("aria-label", AREAS[i].n);
    const ty = y < cy - 20 ? y - 20 : y + 28;
    g.innerHTML = `<circle cx="${x}" cy="${y}" r="${active === i ? 16 : 12}" fill="#0a0a24" stroke="${AREAS[i].c}" stroke-width="2.5"/><circle cx="${x}" cy="${y}" r="5" fill="${AREAS[i].c}"/><text x="${x}" y="${ty}">${AREAS[i].n}</text>`;
    g.onclick = () => select(i); g.onkeydown = (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); select(i); } };
    svg.appendChild(g);
  });
}
function select(i) {
  active = i; const a = i < 0 ? ROOT : AREAS[i];
  $("#detail").innerHTML = `<div class="top"><span>TAP ANY AREA TO EXPLORE</span><span>8 AREAS</span></div><h3>${a.t}</h3><p>${a.d}</p><ul>${a.b.map(x => `<li>${x}</li>`).join("")}</ul><div class="foot">${i < 0 ? "Covered across all <b>24 modules</b> · capstone <b>OmniGuard</b>" : `Learned in <b>${a.m}</b>`}</div>`;
  drawMap();
  document.querySelectorAll("#pills button").forEach((b, k) => b.classList.toggle("on", k === i));
}
AREAS.forEach((a, i) => { const b = h("button", "", `<i style="background:${a.c}"></i>${a.n}`); b.onclick = () => select(i); $("#pills").appendChild(b); });
select(-1);

// ---- static sections ----
const card = (ic, t, p, bg) => `<div class="card"><div class="ic" ${bg ? `style="background:${bg}"` : ""}>${ic}</div><h3>${t}</h3><p>${p}</p></div>`;
$("#why").innerHTML = [
  ["🧠", "AI-Powered Applications", "LLMs, prompt and model engineering, advanced RAG and multimodal document intelligence.", "linear-gradient(135deg,var(--violet),var(--pink))"],
  ["⛓", "Intelligent Agents & Workflows", "Tool calling, LangGraph, multi-agent systems and MCP with human approval built in.", "linear-gradient(135deg,var(--cyan),var(--eblue))"],
  ["◎", "Real-World Problem Solving", "Customer discovery, process analysis, BRDs and technical specs before writing code.", "linear-gradient(135deg,var(--sun),var(--orange))"],
  ["🚀", "Deployment & Customer Impact", "Docker, Kubernetes, CI/CD, UAT, go-live, hypercare and reliability engineering.", "linear-gradient(135deg,var(--violet),var(--cyan))"],
].map(x => card(...x)).join("");
$("#overview").innerHTML = [
  ["▤", "Program structure", "24 modules across 8 phases — from foundations to forward deployed engineering and production."],
  ["♙", "Mentor", "Led by Arjun Mehta, Lead Trainer at Smartgrow Infotech, with 15+ years of IT experience."],
  ["🧠", "Curriculum", "Python, data, backend, frontend, cloud, LLMs, RAG, agents, security, LLMOps, enterprise integration and delivery."],
  ["</>", "Practical learning", "Every module ends with a hands-on mini-project — build something real."],
  ["⛨", "Capstone", "OmniGuard — an Enterprise AI Field Service Platform built end to end."],
  ["💼", "Career readiness", "Module 24 covers technical & client presentations, portfolio and interview preparation."],
].map(x => card(...x)).join("");

// ---- curriculum ----
const PHASES = [
  ["I", "Engineering Foundations", [["Python, Linux & Engineering Foundations", "Build the core skills for AI & production engineering", "Python CLI utility"], ["Software Engineering, Git & Testing", "Build code that can be trusted", "Production-Ready Python Service"], ["SQL, Databases & Data Engineering", "Master the data layer behind AI systems", "Enterprise Data Analytics API"]]],
  ["II", "Application Engineering", [["Backend & Enterprise API Engineering", "Build production-ready backends", "AI Service Backend"], ["Frontend Engineering & AI User Experiences", "Build modern AI application interfaces", "AI Assistant Web Application"], ["Cloud, Networking & Infrastructure", "Understand where AI systems run", "Cloud-Ready AI Service"], ["Docker, Kubernetes, CI/CD & Deployment", "Move from code to production", "Containerized AI Application"]]],
  ["III", "AI Engineering", [["LLM & Generative AI Engineering", "Understand and build with LLMs", "LLM-Powered AI Assistant"], ["Advanced RAG, Search & Knowledge Engineering", "Turn enterprise data into intelligence", "Enterprise Knowledge Copilot"], ["Agentic AI & Tool Calling", "Build AI systems that take action", "AI Task Automation Agent"], ["LangGraph, Multi-Agent Systems & MCP", "Orchestrate complex AI workflows", "Multi-Agent Enterprise Assistant"], ["Multimodal AI & Document Intelligence", "Build AI that understands more than text", "Multimodal Document Assistant"]]],
  ["IV", "AI Security & Production", [["AI Security, Guardrails & Red Teaming", "Secure AI systems before production", "Secure AI Copilot"], ["LLMOps, Evaluation & Observability", "Measure AI quality, cost and reliability", "AI Evaluation & Monitoring System"]]],
  ["V", "Enterprise Engineering", [["Enterprise Integration, ERP & Legacy Systems", "Connect AI to real enterprise systems", "Enterprise AI Integration"], ["IAM, SSO & Enterprise Security", "Control who can access what", "Secure Enterprise AI Portal"]]],
  ["VI", "System Design", [["AI System Design: HLD, LLD & Architecture", "Design AI systems before building them", "AI System Architecture"]]],
  ["VII", "Forward Deployed Engineering", [["Customer Discovery & Process Engineering", "Find the real problem before building", "Real-World Automation Discovery"], ["BRD, TDD & AI Technical Specifications", "Turn business requirements into buildable systems", "Business Requirement → AI Solution"], ["Stakeholder Management, Agile & Client Delivery", "Deliver AI solutions with confidence", "Client Delivery Simulation"], ["UAT, Go-Live, Hypercare & Change Management", "Take AI from testing to production", "AI Production Go-Live"]]],
  ["VIII", "Production & Capstone", [["SRE, Reliability & Incident Engineering", "Keep AI systems running", "AI Production Incident Lab"], ["Enterprise AI Capstone — OmniGuard", "Enterprise AI Field Service Platform", "OmniGuard capstone"], ["FDE Final Delivery & Career Readiness", "Turn your project into an FDE portfolio", "FDE portfolio + enterprise technical presentation"]]],
];
const MINIS = [
  "Build a practical command-line utility using Python, OOP, files, logging and Linux.", "Build, test, review and version a small Python application using Git.", "Design a relational database and build SQL queries and a Python service around it.", "Build a FastAPI backend exposing secure APIs for an AI application.", "AI interface connected to a backend API.", "Design and deploy the infrastructure required for a production AI API.", "Dockerize an AI application and create a CI/CD deployment pipeline.", "Build an LLM application using structured prompts and controlled model outputs.", "Build a production-style RAG assistant over enterprise documents with citations.", "Build an agent that understands a task, selects tools and completes the workflow.", "Build a supervisor agent coordinating multiple specialist agents and tools.", "Upload documents/images and extract structured information through an AI assistant.", "Attack and defend an AI application against common AI security threats.", "Evaluate an AI application and monitor quality, latency, errors and token costs.", "Connect an AI application with enterprise APIs and simulate an ERP workflow.", "Build an AI application with SSO, roles, permissions and tenant-aware access.", "Create HLD, LLD, API flows and architecture decisions for an enterprise AI solution.", "Study a business process and convert the problem into an AI automation opportunity.", "Create BRD + TDD + AI technical specifications for an enterprise AI project.", "Run a complete sprint from requirements to demo and stakeholder feedback.", "Execute UAT, defect tracking, go-live planning and post-launch hypercare.", "Diagnose and recover an AI system suffering from latency, errors or data/retrieval failures.", null, "FDE portfolio + enterprise technical presentation.",
];
const MOD1 = [["Python Core Foundations", ["Python syntax, data structures & control flow", "Functions, modules & packages", "Files, JSON & CSV", "Exception handling & debugging", "Type hints & virtual environments"]], ["Advanced Python & OOP", ["Classes, objects & inheritance", "Composition, abstraction & encapsulation", "Dataclasses & generators", "Context managers", "Clean code & SOLID principles"]], ["Linux for Engineers", ["Linux filesystem & permissions", "Processes & resource management", "Shell scripting", "Environment variables", "Logs & troubleshooting"]]];
let num = 0; const mods = [];
PHASES.forEach(([rn, name, list]) => {
  const ph = h("div", "phase", `<small>PHASE ${rn}</small><h3>${name}</h3>`);
  list.forEach(([t, s, proj]) => {
    num++; const n = String(num).padStart(2, "0"), i = num - 1;
    let body;
    if (num === 1) body = MOD1.map(([g, items]) => `<h5>${g}</h5><ul class="dots">${items.map(x => `<li>${x}</li>`).join("")}</ul>`).join("");
    else body = `<p>${s}. Detailed topic list for this module is shared by the team on request.</p>`;
    const mp = MINIS[i] ? `<div class="mp"><b>Mini-project — ${proj}:</b> ${MINIS[i]}</div>` : `<div class="mp"><b>Capstone — OmniGuard:</b> the whole program, end to end.</div>`;
    const m = h("div", "mod" + (num === 1 ? " open" : ""), `<button aria-expanded="${num === 1}"><span class="n">${n}</span><span><strong>${t}</strong><span class="s">${s}</span></span><span class="chev">⌄</span></button><div class="body">${body}${mp}</div>`);
    m.querySelector("button").onclick = () => toggle(m); mods.push(m); ph.appendChild(m);
  });
  $("#curr").appendChild(ph);
});
function toggle(m, force) { const o = force ?? !m.classList.contains("open"); m.classList.toggle("open", o); m.querySelector("button").setAttribute("aria-expanded", o); count(); }
function count() { const k = mods.filter(m => m.classList.contains("open")).length; $("#expCount").textContent = `${k} of 24 expanded`; $("#expAll").textContent = k === 24 ? "Collapse all" : "Expand all"; }
$("#expAll").onclick = () => { const all = mods.every(m => m.classList.contains("open")); mods.forEach(m => toggle(m, !all)); };

$("#minis").innerHTML = MINIS.map((d, i) => d ? `<div class="card mini"><small>MODULE ${String(i + 1).padStart(2, "0")}</small><h4>${PHASES.flatMap(p => p[2])[i][2]}</h4><p>${d}</p></div>` : "").join("");

// ---- remaining content ----
$("#tech").innerHTML = [["Programming & Apps", "Python,Linux,Git,Pytest,TypeScript,React,FastAPI,Pydantic"], ["Data", "PostgreSQL,MySQL,MongoDB,DynamoDB,Redis,Vector databases"], ["GenAI & LLMs", "Transformers,Embeddings,Prompt engineering,RAG,Graph RAG,Vision-language models,OCR"], ["Agentic Workflows", "ReAct,Function calling,LangGraph,Multi-agent systems,MCP"], ["Cloud & Deployment", "AWS,Azure,GCP,Terraform,Docker,Kubernetes,GitHub Actions,Jenkins / Azure DevOps"], ["Enterprise & Security", "SAP,Salesforce,ServiceNow,Oracle,Microsoft Dynamics,OAuth2 / OIDC / SAML,Microsoft Entra,LLMOps & evaluation"]].map(([t, l]) => `<div><h4>${t}</h4><div class="tags">${l.split(",").map(x => `<span>${x}</span>`).join("")}</div></div>`).join("");
$("#who").innerHTML = [["Software engineers", "Extend your coding skills into AI systems, agents and customer-facing delivery."], ["Backend developers", "Build on APIs and data skills with FastAPI, RAG, tool calling and enterprise integration."], ["Full-stack developers", "Ship complete AI apps — React interfaces, streaming chat UX and production backends."], ["Platform engineers", "Apply cloud, Kubernetes and CI/CD to LLMOps, observability and reliable AI."], ["Experienced developers exploring applied AI", "A structured path from foundations to an enterprise capstone and portfolio."]].map(([t, p]) => `<div class="card"><h3>${t}</h3><p>${p}</p></div>`).join("");
$("#outcomes").innerHTML = ["Build AI applications with LLMs and structured prompts", "Design production-grade RAG with citations and hybrid retrieval", "Engineer safe agents, multi-agent workflows and MCP integrations", "Secure AI systems with guardrails and red teaming", "Evaluate and monitor AI quality, latency and cost", "Integrate AI with SAP, Salesforce, ServiceNow and legacy systems", "Design AI systems with HLD, LLD and architecture decisions", "Run discovery, write BRDs/TDDs and deliver to stakeholders", "Deploy with Docker, Kubernetes, CI/CD and handle go-live"].map(x => `<li>${x}</li>`).join("");
$("#journey").innerHTML = [["Learn core skills", "Phases I–II"], ["Engineer AI systems", "Phases III–IV"], ["Work with the enterprise", "Phases V–VI"], ["Deploy forward", "Phase VII"], ["Capstone & portfolio", "Phase VIII"]].map(([t, p], i) => `<div><b>0${i + 1}</b><h4>${t}</h4><p>${p}</p></div>`).join("");

// ---- FAQ (only the first answer was visible on the reference; the rest are drafted from page content — review before launch) ----
const FAQ = [
  ["What is a Forward Deployed Engineer (FDE)?", "A Forward Deployed Engineer is a software engineer who works directly with customers to understand real business problems, then builds, integrates and deploys practical AI solutions for them. The role combines software engineering, applied AI and customer-facing delivery."],
  ["What does a Forward Deployed Engineer do day to day?", "Day to day an FDE runs discovery with customers, turns problems into specs, builds and integrates AI solutions, and supports them through deployment and go-live. Responsibilities vary by company."],
  ["How is an FDE different from a Software Development Engineer (SDE)?", "An SDE typically builds and maintains features against defined requirements. An FDE owns the whole problem, from the first customer meeting to an AI system running in production."],
  ["How do I become a Forward Deployed Engineer?", "Build strong engineering foundations, then add applied AI (LLMs, RAG, agents), enterprise integration, and customer-facing delivery skills. This program covers that path in 24 modules."],
  ["Is Forward Deployed Engineering a good career?", "It suits engineers who enjoy customer-facing, end-to-end AI delivery. Outcomes depend on skills, experience, employer and market conditions; none are guaranteed."],
  ["How many modules does the program have?", "24 modules across 8 phases, each ending with a hands-on mini-project, plus the OmniGuard capstone."],
  ["What is OmniGuard?", "OmniGuard is the Module 23 capstone: an Enterprise AI Field Service Platform built end to end, from discovery and BRD/TDD to a secured, deployed and monitored platform."],
  ["Who is the mentor?", "Arjun Mehta, Lead Trainer at Smartgrow Infotech, with 15+ years of experience in software engineering and applied AI."],
  ["Are there hands-on projects?", "Yes. Every module ends with a mini-project, and the program finishes with the OmniGuard capstone and a portfolio."],
  ["What is the duration, schedule and fee?", "Please ask the team on WhatsApp or Instagram for batch dates, duration, fees and how to enrol."],
  ["Who runs the training?", "The program is run by Smartgrow Infotech."],
];
FAQ.forEach(([q, a], i) => {
  const f = h("div", "faq" + (i === 0 ? " open" : ""), `<button aria-expanded="${i === 0}"><span>${q}</span><span class="pl">+</span></button><div class="a">${a}</div>`);
  f.querySelector("button").onclick = () => { const o = f.classList.toggle("open"); f.querySelector("button").setAttribute("aria-expanded", o); };
  $("#faqList").appendChild(f);
});
