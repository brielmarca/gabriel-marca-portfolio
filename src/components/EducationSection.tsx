import type { IconType } from "react-icons";
import { FaBookOpen, FaCode, FaGraduationCap, FaLocationDot } from "react-icons/fa6";
import { educationItems, profile } from "@/data/profile";
import type { Messages } from "@/i18n/messages";
import type { EducationIconId } from "@/types/portfolio";

const educationIcons: Record<EducationIconId, IconType> = {
  code: FaCode,
  school: FaBookOpen,
  university: FaGraduationCap,
};

function formatAge(template: string) {
  return template.replace("{age}", String(profile.age));
}

export function EducationSection({ text }: Readonly<{ text: Messages }>) {
  return (
    <section id="education" className="content-section page-container education-section" aria-labelledby="education-title">
      <div className="section-heading education-heading">
        <p className="technical-label">{text.annotations.education}</p>
        <h2 id="education-title" tabIndex={-1}>{text.education.title}</h2>
        <span className="heading-rule" aria-hidden="true" />
        <p className="education-meta">
          <FaLocationDot aria-hidden="true" focusable="false" />
          {formatAge(text.education.ageLocation).replace("{country}", text.education.countries[profile.country])}
        </p>
      </div>
      <div className="education-grid">
        {educationItems.map((item) => {
          const itemText = text.education.items[item.id];
          const Icon = educationIcons[item.icon];

          return (
            <article className="education-card" key={item.id}>
              <div className="education-card-header">
                <span className="education-icon" aria-hidden="true"><Icon focusable="false" /></span>
                <p className="education-label">{itemText.label}</p>
                {item.status && <span className="education-status">{text.education.statuses[item.status]}</span>}
              </div>
              <h3>{itemText.title}</h3>
              {item.institution && (
                <p className="education-institution">
                  {item.institution}{item.location && <> <span aria-hidden="true">·</span> {item.location}</>}
                </p>
              )}
              <p className="education-description">{itemText.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
