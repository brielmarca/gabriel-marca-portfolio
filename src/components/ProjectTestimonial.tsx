import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa6";
import type { ProjectTestimonial as ProjectTestimonialData } from "@/types/portfolio";

function getInitials(author: string) {
  return author
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((name) => name[0])
    .join("")
    .toUpperCase();
}

export function ProjectTestimonial({ testimonial }: Readonly<{ testimonial?: ProjectTestimonialData }>) {
  if (!testimonial) return null;

  const quote = testimonial?.quote.trim();
  const author = testimonial?.author.trim();
  const role = testimonial?.role.trim();
  const avatar = testimonial.avatar?.src.startsWith("/") && testimonial.avatar.alt.trim()
    ? testimonial.avatar
    : undefined;

  if (!quote || !author || !role) return null;

  return (
    <blockquote className="project-testimonial">
      <FaQuoteLeft className="project-testimonial-quote" aria-hidden="true" />
      <p>{quote}</p>
      <footer>
        {avatar ? (
          <Image
            className="project-testimonial-avatar"
            src={avatar.src}
            alt={avatar.alt}
            width={44}
            height={44}
          />
        ) : (
          <span className="project-testimonial-initials" aria-hidden="true">{getInitials(author)}</span>
        )}
        <cite>
          <strong>{author}</strong>
          <span>{role}</span>
        </cite>
      </footer>
    </blockquote>
  );
}
