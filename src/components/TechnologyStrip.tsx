const technologies = [
  "Java & Spring Boot",
  "React & TypeScript",
  "PostgreSQL",
  "Docker & Linux",
  "Node.js & Express",
  "Cloudflare",
  "REST APIs",
] as const;

function TechnologyGroup({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="technology-group" aria-hidden={hidden || undefined}>
      {technologies.map((technology) => (
        <li key={technology}>
          <span aria-hidden="true">◆</span>
          {technology}
        </li>
      ))}
    </ul>
  );
}

export function TechnologyStrip() {
  return (
    <div className="technology-strip" role="group" aria-label="Core technologies">
      <div className="technology-track">
        <TechnologyGroup />
        <TechnologyGroup hidden />
      </div>
    </div>
  );
}
