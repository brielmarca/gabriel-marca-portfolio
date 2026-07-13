import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section id="projects" className="content-section page-container" aria-labelledby="projects-title">
      <SectionHeading title="Featured Work" annotation="MODULE :: PROJECTS" titleId="projects-title" />
      <div className="projects-list">
        {projects.map((project, index) => <ProjectCard key={project.name} project={project} index={index} />)}
      </div>
    </section>
  );
}
