import React, { ReactNode } from "react";
import { Loading } from "@xriba/ui";
import { useTranslation } from "react-i18next";

export interface QueryHandlerProps {
    isLoading: boolean;
    isError: boolean;
    loadingText?: string;
    errorText?: string;
    children?: ReactNode | ReactNode[];
}

const QueryHandler = ({ isLoading, isError, loadingText, errorText, children }: QueryHandlerProps): JSX.Element => {
    const { t } = useTranslation();

    return (
        <>
            {isLoading ? (
                <Loading text={loadingText ?? t("common.loading")} />
            ) : isError ? (
                <span className="error">{errorText ?? t("common.error")}</span>
            ) : (
                children
            )}
        </>
    );
};

export default QueryHandler;
