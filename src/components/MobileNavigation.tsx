"use client";

import { useEffect, useRef, useState } from "react";
import { navigationLinks } from "@/data/navigation";

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button
        ref={buttonRef}
        type="button"
        className="menu-button"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
        <span aria-hidden="true" className={`menu-lines ${isOpen ? "is-open" : ""}`}>
          <span />
          <span />
        </span>
      </button>
      {isOpen && (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="mobile-nav-panel">
          <ul>
            {navigationLinks.map((link, index) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setIsOpen(false)}>
                  <span aria-hidden="true">0{index + 1}</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
