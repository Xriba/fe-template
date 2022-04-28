import React, { FC } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export interface BasePageProps {
    children?: React.ReactNode;
    className?: string;
}

const BasePage: FC<BasePageProps> = ({ children, className }) => {
    const { t } = useTranslation();

    return (
        <div className={["base-page", className].join(" ")}>
            <nav>
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link to="/">{t("pages.home.nav")}</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/users">{t("pages.users.nav")}</Link>
                    </li>
                </ul>
            </nav>
            <main>{children}</main>
        </div>
    );
};

export default BasePage;
