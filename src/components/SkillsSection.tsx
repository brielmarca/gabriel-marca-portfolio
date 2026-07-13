import { SectionHeading } from "@/components/SectionHeading";
import { skillCategories } from "@/data/skills";

export function SkillsSection() {
  return (
    <section id="skills" className="content-section page-container" aria-labelledby="skills-title">
      <SectionHeading title="Technical Arsenal" annotation="MODULE :: CAPABILITIES" titleId="skills-title" align="center" />
      <div className="skills-grid">
        {skillCategories.map((category) => (
          <article className="skill-card" key={category.name}>
            <div className="skill-card-header">
              <span className="skill-index" aria-hidden="true">{category.code}</span>
              <span className="card-line" aria-hidden="true" />
            </div>
            <h3>{category.name}</h3>
            <ul>
              {category.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
