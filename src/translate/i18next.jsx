import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import LanguageDetector from "i18next-browser-languagedetector";
import arFile from "./ar.json";
import enFile from "./en.json";

// document.cookie = "langDefault=ar";
// document.cookie = "langUser=ar";

// function getCookie(cname) {
//   let name = cname + "=";
//   let decodedCookie = decodeURIComponent(document.cookie);
//   let ca = decodedCookie.split(';');
//   for(let i = 0; i <ca.length; i++) {
//     let c = ca[i];
//     while (c.charAt(0) == ' ') {
//       c = c.substring(1);
//     }
//     if (c.indexOf(name) == 0) {
//       return c.substring(name.length, c.length);
//     }
//   }
//   return "";
// }

// console.log(getCookie("langUser"));

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