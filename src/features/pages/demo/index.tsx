import React from "react";
import { useTranslation } from "react-i18next";
import "src/services/i18n";
import "./index.scss";
import BasePage from "layouts/base-page";
import AddressPage from "pages/demo/pages/AddressPage";
import BreadcrumbsPage from "pages/demo/pages/BreadcrumbsPage";
import ButtonPage from "pages/demo/pages/ButtonPage";
import CheckboxPage from "pages/demo/pages/CheckboxPage";
import CurrencyInputPage from "pages/demo/pages/CurrencyInputPage";
import DateInputPage from "pages/demo/pages/DateInputPage";
import HeadingPage from "pages/demo/pages/HeadingPage";
import IconPage from "pages/demo/pages/IconPage";
import InputPage from "pages/demo/pages/InputPage";
import LoadingPage from "pages/demo/pages/LoadingPage";
import ModalPage from "pages/demo/pages/ModalPage";
import PaginationPage from "pages/demo/pages/PaginationPage";
import ProgressPage from "pages/demo/pages/ProgressPage";
import RadioButtonPage from "pages/demo/pages/RadioButtonPage";
import ReloadPage from "pages/demo/pages/ReloadPage";
import SelectPage from "pages/demo/pages/SelectPage";
import SwitchPage from "pages/demo/pages/SwitchPage";
import TablePage from "pages/demo/pages/TablePage";
import TextPage from "pages/demo/pages/TextPage";
import ToastPage from "pages/demo/pages/ToastPage";
import TogglePage from "pages/demo/pages/TogglePage";
import TooltipPage from "pages/demo/pages/TooltipPage";

export const DemoPage = () => {
    const { t } = useTranslation();

    return (
        <BasePage className={"demo-page"}>
            <h1 id="welcome">{t("pages.demo.title")}</h1>

            <div>
                <AddressPage />
                <BreadcrumbsPage />
                <ButtonPage />
                <CheckboxPage />
                <CurrencyInputPage />
                <DateInputPage />
                <HeadingPage />
                <IconPage />
                <InputPage />
                <LoadingPage />
                <ModalPage />
                <PaginationPage />
                <ProgressPage />
                <RadioButtonPage />
                <ReloadPage />
                <SelectPage />
                <SwitchPage />
                <TablePage />
                <TextPage />
                <ToastPage />
                <TogglePage />
                <TooltipPage />
            </div>
        </BasePage>
    );
};
export default DemoPage;
