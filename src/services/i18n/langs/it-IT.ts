import { ResourceLanguage } from "i18next";

const translation: ResourceLanguage = {
    common: {
        loading: "Sto caricando...",
        success: "Dati caricati",
        error: "Errore caricamento dati",
    },
    columns: {
        lastName: "COGNOME",
        firstName: "NOME",
        email: "EMAIL",
        created_at: "DATA DI AGGIUNTA",
        updated_at: "DATA DI MODIFICA",
    },
    pages: {
        demo: {
            title: "Demo della UI Library",
            nav: "Demo",
        },
        api: {
            title: "Caricamento dati tramite API call",
            nav: "API",
        },
    },
};

export default translation;
