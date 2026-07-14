"use client";

import { useEffect, useRef, useState } from "react";
import { MdLanguage } from "react-icons/md";
import { useLanguage } from "@/i18n/LanguageProvider";
import type { Messages } from "@/i18n/messages";
import type { Locale } from "@/types/portfolio";

const locales: readonly Locale[] = ["en", "pt", "es"];

export function LanguageSelector({ text }: Readonly<{ text: Messages["language"] }>) {
  const { locale, setLocale } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const optionRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const selectedName = text[locale];
  const selectedLabel = text.selected.replace("{language}", selectedName);

  useEffect(() => {
    if (!isOpen) return;

    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setIsOpen(false);
    };

    document.addEventListener("pointerdown", closeOnOutsideClick);
    return () => document.removeEventListener("pointerdown", closeOnOutsideClick);
  }, [isOpen]);

  const openAndFocus = (index: number) => {
    setIsOpen(true);
    requestAnimationFrame(() => optionRefs.current[index]?.focus());
  };

  const selectLocale = (nextLocale: Locale) => {
    setLocale(nextLocale);
    setIsOpen(false);
    requestAnimationFrame(() => buttonRef.current?.focus());
  };

  const handleMenuKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const focusedIndex = optionRefs.current.findIndex((option) => option === document.activeElement);
    let nextIndex: number | undefined;

    if (event.key === "ArrowDown") nextIndex = (focusedIndex + 1) % locales.length;
    if (event.key === "ArrowUp") nextIndex = (focusedIndex - 1 + locales.length) % locales.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = locales.length - 1;
    if (event.key === "Escape") {
      event.preventDefault();
      setIsOpen(false);
      buttonRef.current?.focus();
      return;
    }

    if (nextIndex !== undefined) {
      event.preventDefault();
      optionRefs.current[nextIndex]?.focus();
    }
  };

  return (
    <div className="language-selector" ref={rootRef}>
      <button
        ref={buttonRef}
        type="button"
        className="header-control-button language-control"
        aria-label={`${text.change}. ${selectedLabel}`}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls="language-menu"
        title={text.change}
        onClick={() => isOpen ? setIsOpen(false) : openAndFocus(locales.indexOf(locale))}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown" || event.key === "ArrowUp") {
            event.preventDefault();
            openAndFocus(event.key === "ArrowDown" ? 0 : locales.length - 1);
          }
        }}
      >
        <MdLanguage aria-hidden="true" />
        <span aria-hidden="true">{locale.toUpperCase()}</span>
      </button>
      {isOpen && (
        <div id="language-menu" className="language-menu" role="menu" aria-label={text.menu} onKeyDown={handleMenuKeyDown}>
          {locales.map((optionLocale, index) => (
            <button
              key={optionLocale}
              ref={(element) => { optionRefs.current[index] = element; }}
              type="button"
              role="menuitemradio"
              aria-checked={locale === optionLocale}
              tabIndex={-1}
              onClick={() => selectLocale(optionLocale)}
            >
              <span>{text[optionLocale]}</span>
              <span className="language-menu-code" aria-hidden="true">{optionLocale.toUpperCase()}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
