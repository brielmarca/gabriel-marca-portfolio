import Image from "next/image";
import { TechnologyStrip } from "@/components/TechnologyStrip";

export function HeroSection() {
  return (
    <section id="home" className="hero-section page-container" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="technical-label">SYS_INIT :: PORTFOLIO_V1.0</p>
        <p className="availability"><span aria-hidden="true" />Open to client projects and future opportunities</p>
        <h1 id="hero-title">
          <span className="hero-lead whitespace-nowrap">Full-Stack Developer</span>{" "}
          <span className="hero-building whitespace-nowrap">building <strong>secure</strong> and</span>{" "}
          <span className="hero-nowrap whitespace-nowrap">production-ready</span> systems.
        </h1>
        <div className="hero-actions">
          <a className="button button-primary" href="#contact">Contact Me</a>
          <a className="button button-secondary" href="#projects">View My Projects</a>
        </div>
        <TechnologyStrip />
      </div>
      <div className="hero-visual">
        <div className="portrait-frame">
          <div className="portrait-glow" aria-hidden="true" />
          <Image
            src="/images/gabriel-portrait.png"
            alt="Gabriel Marca, Full-Stack Developer"
            width={576}
            height={1024}
            priority
            sizes="(max-width: 767px) 84vw, (max-width: 1023px) 48vw, 38vw"
            className="portrait-image"
          />
          <div className="interface-card code-card" aria-hidden="true">
            <span>const</span> developer = &#123;<br />
            &nbsp;&nbsp;focus: <b>&apos;production&apos;</b>,<br />
            &nbsp;&nbsp;security: <b>true</b><br />
            &#125;;
          </div>
          <div className="interface-card deploy-card" aria-hidden="true">
            <span>DEPLOYMENT_STATUS</span><br />services online <b>[OK]</b>
          </div>
        </div>
      </div>
    </section>
  );
}
