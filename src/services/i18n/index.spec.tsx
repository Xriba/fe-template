import React, { FC } from "react";
import "./index";
import { useTranslation } from "react-i18next";
import { render } from "@testing-library/react";
import i18next from "i18next";

const TestComponent: FC = () => {
    const { t } = useTranslation();

    return <div className="text">{t("common.loading")}</div>;
};

describe("i18n library formatting", () => {
    it("should translate a string in a component using the useTranslation hook", () => {
        const { getByText } = render(<TestComponent />);
        const text = getByText("Sto caricando...");

        expect(text).toBeInTheDocument();
    });
    it("should translate a string", function () {
        expect(i18next.t("common.loading")).toEqual("Sto caricando...");
    });
});
