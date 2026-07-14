import Image from "next/image";
import type { Project } from "@/types/portfolio";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const isReversed = index % 2 === 1;

  return (
    <article className={`project-card ${isReversed ? "is-reversed" : ""}`}>
      <a className="project-image-link" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.name} live project`}>
        <Image
          src={project.image}
          alt={project.imageAlt}
          width={project.imageWidth}
          height={project.imageHeight}
          quality={90}
          sizes="(max-width: 1099px) 100vw, 58vw"
          className="project-image"
        />
      </a>
      <div className="project-content">
        <p className="project-number">PROJECT_0{index + 1}</p>
        <p className="project-type">{project.type}</p>
        <h3><a href={project.url} target="_blank" rel="noopener noreferrer">{project.name}</a></h3>
        <ul className="status-list" aria-label="Project status">
          {project.statuses.map((status) => <li key={status}>{status}</li>)}
        </ul>
        <p className="project-description">{project.description}</p>
        <ul className="technology-list" aria-label="Technologies used">
          {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
        <a className="project-action" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.name} live project`}>
          View Live Project
          <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18"><path d="M7 17 17 7M8 7h9v9" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" /></svg>
        </a>
      </div>
    </article>
  );
}
