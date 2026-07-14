import type { ReactNode } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { skillCategories } from "@/data/skills";

function SkillIcon({ code }: { code: string }) {
  let paths: ReactNode;

  switch (code) {
    case "01":
      paths = (
        <>
          <rect x="4" y="4" width="16" height="6" rx="1" />
          <rect x="4" y="14" width="16" height="6" rx="1" />
          <path d="M7 7h.01M7 17h.01M11 7h6M11 17h6" />
        </>
      );
      break;
    case "02":
      paths = <path d="m9 7-5 5 5 5M15 7l5 5-5 5M13 4l-2 16" />;
      break;
    case "03":
      paths = (
        <>
          <ellipse cx="12" cy="5" rx="7" ry="3" />
          <path d="M5 5v7c0 1.7 3.1 3 7 3s7-1.3 7-3V5M5 12v7c0 1.7 3.1 3 7 3s7-1.3 7-3v-7" />
        </>
      );
      break;
    case "04":
      paths = (
        <>
          <rect x="3" y="4" width="6" height="6" rx="1" />
          <rect x="15" y="14" width="6" height="6" rx="1" />
          <path d="M9 7h4a4 4 0 0 1 4 4v3M7 10v5a3 3 0 0 0 3 3h5" />
        </>
      );
      break;
    case "05":
      paths = (
        <>
          <path d="M12 3 19 6v5c0 4.4-2.8 8.3-7 10-4.2-1.7-7-5.6-7-10V6l7-3Z" />
          <path d="m9 12 2 2 4-5" />
        </>
      );
      break;
    default:
      paths = (
        <>
          <rect x="3" y="4" width="18" height="16" rx="1" />
          <path d="m7 9 3 3-3 3M13 15h4" />
        </>
      );
  }

  return <svg viewBox="0 0 24 24" focusable="false">{paths}</svg>;
}

export function SkillsSection() {
  return (
    <section id="skills" className="content-section page-container" aria-labelledby="skills-title">
      <SectionHeading title="Technical Arsenal" annotation="MODULE :: CAPABILITIES" titleId="skills-title" align="center" />
      <div className="skills-grid">
        {skillCategories.map((category) => (
          <article className="skill-card" key={category.name}>
            <div className="skill-card-header">
              <span className="skill-icon" aria-hidden="true"><SkillIcon code={category.code} /></span>
              <h3>{category.name}</h3>
              <span className="skill-index" aria-hidden="true">{category.code}</span>
            </div>
            <ul>
              {category.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
