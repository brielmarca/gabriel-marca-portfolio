interface SectionHeadingProps {
  title: string;
  annotation: string;
  titleId: string;
  align?: "left" | "center";
}

export function SectionHeading({ title, annotation, titleId, align = "left" }: SectionHeadingProps) {
  return (
    <div className={`section-heading ${align === "center" ? "is-centered" : ""}`}>
      <p className="technical-label">{annotation}</p>
      <h2 id={titleId} tabIndex={-1}>{title}</h2>
      <span className="heading-rule" aria-hidden="true" />
    </div>
  );
}
