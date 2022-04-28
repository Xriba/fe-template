import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import translation from "src/services/i18n/langs/it-IT";

export const resources = {
    it: {
        translation,
    },
} as const;

i18next
    .use(initReactI18next)
    .init({
        lng: "it",
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources,
    })
    .then();
