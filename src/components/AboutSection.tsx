import { SectionHeading } from "@/components/SectionHeading";

export function AboutSection() {
  return (
    <section id="about" className="content-section page-container" aria-labelledby="about-title">
      <div className="about-layout">
        <SectionHeading title="The Story" annotation="MODULE :: ABOUT" titleId="about-title" />
        <div className="about-copy">
          <p>I’m Gabriel Marca, a Full-Stack Developer from Brazil. I lived in Portugal for several years, and that was where I started learning programming about four years ago. What began as curiosity became something I took seriously, and since then I’ve kept improving by building projects, solving problems and taking on more complex challenges.</p>
          <p>Today, I work on paid projects for businesses, handling everything from frontend and backend development to databases, deployment and infrastructure. Security is part of that work from the beginning, with authentication, permissions, protected data, HTTPS/TLS and careful credential handling built into the process.</p>
          <p>I also mentor six students, helping them understand how software is really built instead of just copying code. I’m still learning every day, but now I’m doing it while creating systems that people and companies actually use.</p>
        </div>
      </div>
    </section>
  );
}
