import { createContext, useContext, useState, useCallback, useEffect } from "react";

import pt from "../locales/pt.json";
import en from "../locales/en.json";
import es from "../locales/es.json";

const translations = { pt, en, es };
const validLanguages = Object.keys(translations);

function getLanguageFromURL() {
  const params = new URLSearchParams(window.location.search);
  const lang = params.get("lang");
  return lang && validLanguages.includes(lang) ? lang : null;
}

function updateURL(lang) {
  const url = new URL(window.location);
  if (lang === "pt") {
    url.searchParams.delete("lang");
  } else {
    url.searchParams.set("lang", lang);
  }
  window.history.replaceState({}, "", url);
}

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    // Tenta pegar da URL, senão usa PT como padrão
    return getLanguageFromURL() || "pt";
  });

  const setLanguage = useCallback((lang) => {
    if (validLanguages.includes(lang)) {
      setLanguageState(lang);
      updateURL(lang);
    }
  }, []);

  useEffect(() => {
    // Garante que a URL reflete o state inicial se foi pego do fallback
    updateURL(language);
  }, [language]);

  const t = useCallback(
    (key) => {
      const keys = key.split(".");
      let value = translations[language];
      for (const k of keys) {
        if (value === undefined) return key; // Fallback para a chave se não encontrar
        value = value[k];
      }
      return value !== undefined ? value : key;
    },
    [language]
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
