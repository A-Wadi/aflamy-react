import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import arFile from "./ar.json";
import enFile from "./en.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enFile,
    },
    ar: {
      translation: arFile,
    },
  },
  lng: "ar",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

i18n.on("languageChanged", (lng) => {
  document.documentElement.setAttribute("lang", lng);
});
document.documentElement.setAttribute("lang", "ar");
