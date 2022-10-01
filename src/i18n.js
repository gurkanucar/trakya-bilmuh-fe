import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const tr = require("./translations/tr.json");
const en = require("./translations/en.json");

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translations: { ...en },
    },
    tr: {
      translations: { ...tr },
    },
  },
  fallbackLng: "tr",
  ns: ["translations"],
  defaultNS: "translations",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
    formatSeparator: ",",
  },
  react: {
    wait: true,
  },
});
