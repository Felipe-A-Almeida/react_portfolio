import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import en from "@/locales/en.json";
import ptBR from "@/locales/pt-BR.json";

const STORAGE_KEY = "i18n-lang";

function syncHtmlLang(lng: string) {
  document.documentElement.lang = lng === "en" ? "en" : "pt-BR";
}

function mapDetectedLanguage(lng: string): string {
  const l = lng.toLowerCase();
  if (l.startsWith("pt")) return "pt-BR";
  if (l.startsWith("en")) return "en";
  return "pt-BR";
}

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      "pt-BR": { translation: ptBR },
      en: { translation: en },
    },
    fallbackLng: "pt-BR",
    supportedLngs: ["pt-BR", "en"],
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator"],
      lookupLocalStorage: STORAGE_KEY,
      caches: ["localStorage"],
      convertDetectedLanguage: mapDetectedLanguage,
    },
  });

syncHtmlLang(i18n.language);
i18n.on("languageChanged", (lng) => {
  syncHtmlLang(lng);
});

export default i18n;
