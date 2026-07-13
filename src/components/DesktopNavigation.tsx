import { navigationLinks } from "@/data/navigation";

export function DesktopNavigation() {
  return (
    <nav aria-label="Primary navigation" className="hidden md:block">
      <ul className="flex items-center gap-1 lg:gap-4">
        {navigationLinks.map((link) => (
          <li key={link.href}>
            <a className="nav-link" href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
