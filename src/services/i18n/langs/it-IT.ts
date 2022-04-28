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
        home: {
            title: "Benvenuto nella nostra Home",
            nav: "Home",
        },
        users: {
            title: "Lista utenti",
            nav: "Utenti",
        },
    },
};

export default translation;
