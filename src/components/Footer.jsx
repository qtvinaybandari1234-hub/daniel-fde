import { WaLink, IgLink } from "./Links.jsx";

export function FinalCta() {
  return (
    <section className="final">
      <div className="wrap center">
        <h2 className="huge">The future is forward deployed.</h2>
        <p className="lead">Talk to the Smartgrow Infotech team about the program, curriculum and enrolment.</p>
        <div className="cta c"><WaLink>Talk to Us on WhatsApp →</WaLink><IgLink>Connect on Instagram ↗</IgLink></div>
      </div>
    </section>
  );
}

export function FloatingButtons() {
  return (
    <div className="float">
      <IgLink className="fl ig" aria-label="Instagram">IG</IgLink>
      <WaLink className="fl wa" aria-label="WhatsApp">WA</WaLink>
    </div>
  );
}
