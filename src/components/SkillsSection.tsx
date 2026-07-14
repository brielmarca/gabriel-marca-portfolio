import { SectionHeading } from "@/components/SectionHeading";
import { SkillGlyph } from "@/components/SkillGlyph";
import { skillCategories } from "@/data/skills";

export function SkillsSection() {
  return (
    <section id="skills" className="content-section page-container" aria-labelledby="skills-title">
      <SectionHeading title="Technical Arsenal" annotation="MODULE :: CAPABILITIES" titleId="skills-title" align="center" />
      <div className="skills-grid">
        {skillCategories.map((category) => (
          <article className="skill-card" key={category.code}>
            <div className="skill-card-header">
              <span className="skill-icon" aria-hidden="true"><SkillGlyph icon={category.icon} /></span>
              <h3>{category.name.en}</h3>
              <span className="skill-index" aria-hidden="true">{category.code}</span>
            </div>
            <ul>
              {category.items.map((item) => (
                <li key={item.label.en}>
                  <span className="skill-item-icon" aria-hidden="true" style={{ color: item.color }}><SkillGlyph icon={item.icon} /></span>
                  <span>{item.label.en}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
