import React from "react";
import { useTranslation } from "react-i18next";
import "src/services/i18n";
import "./index.scss";
import BasePage from "layouts/base-page";

export const HomePage = () => {
    const { t } = useTranslation();

    return (
        <BasePage className={"home-page"}>
            <h1 id="welcome">{t("pages.home.title")}</h1>
        </BasePage>
    );
};
export default HomePage;
