import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import WhatIsFde from "./components/WhatIsFde.jsx";
import { Why, Aim, Overview } from "./components/CardSection.jsx";
import Curriculum from "./components/Curriculum.jsx";
import Projects from "./components/Projects.jsx";
import Mentor from "./components/Mentor.jsx";
import { Tech, Who, Outcomes, Journey } from "./components/Info.jsx";
import Faq from "./components/Faq.jsx";
import { FinalCta, FloatingButtons } from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <WhatIsFde />
        <Why />
        <Aim />
        <Overview />
        <Curriculum />
        <Projects />
        <Mentor />
        <Tech />
        <Who />
        <Outcomes />
        <Journey />
        <Faq />
        <FinalCta />
      </main>
      <FloatingButtons />
    </>
  );
}
