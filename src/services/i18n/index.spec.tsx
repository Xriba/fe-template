import React, { FC } from "react";
import { describe, expect, it } from "vitest";
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
        const { queryByText } = render(<TestComponent />);
        const text = queryByText("Sto caricando...");

        expect(text).not.toBeNull();
    });
    it("should translate a string", function () {
        expect(i18next.t("common.loading")).toEqual("Sto caricando...");
    });
});
