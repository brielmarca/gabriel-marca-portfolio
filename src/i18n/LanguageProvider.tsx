"use client";

import { createContext, useContext, useEffect, useSyncExternalStore } from "react";
import { documentLanguages, messages } from "@/i18n/messages";
import type { Locale } from "@/types/portfolio";

const languageStorageKey = "portfolio-language";
const languageChangeEvent = "portfolio-language-change";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getLocaleSnapshot(): Locale {
  const locale = document.documentElement.dataset.language;
  return locale === "pt" || locale === "es" ? locale : "en";
}

function subscribeToLocale(onLocaleChange: () => void) {
  const handleStorage = (event: StorageEvent) => {
    if (event.key !== languageStorageKey) return;
    const locale = event.newValue === "pt" || event.newValue === "es" ? event.newValue : "en";
    document.documentElement.dataset.language = locale;
    document.documentElement.lang = documentLanguages[locale];
    onLocaleChange();
  };

  window.addEventListener(languageChangeEvent, onLocaleChange);
  window.addEventListener("storage", handleStorage);
  return () => {
    window.removeEventListener(languageChangeEvent, onLocaleChange);
    window.removeEventListener("storage", handleStorage);
  };
}

export function LanguageProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const locale = useSyncExternalStore<Locale>(subscribeToLocale, getLocaleSnapshot, () => "en");

  useEffect(() => {
    const text = messages[locale];
    const updateDocument = () => {
      document.documentElement.lang = documentLanguages[locale];
      document.title = text.metadata.title;

      const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
      if (description) description.content = text.metadata.description;
    };

    const observer = new MutationObserver(() => {
      const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
      if (document.title !== text.metadata.title || description?.content !== text.metadata.description) {
        updateDocument();
      }
    });
    observer.observe(document.head, { childList: true, subtree: true, characterData: true, attributes: true });
    updateDocument();
    const frame = requestAnimationFrame(updateDocument);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [locale]);

  const setLocale = (nextLocale: Locale) => {
    document.documentElement.dataset.language = nextLocale;
    document.documentElement.lang = documentLanguages[nextLocale];

    try {
      window.localStorage.setItem(languageStorageKey, nextLocale);
    } catch {}

    window.dispatchEvent(new Event(languageChangeEvent));
  };

  return <LanguageContext value={{ locale, setLocale }}>{children}</LanguageContext>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}

export { languageStorageKey };
