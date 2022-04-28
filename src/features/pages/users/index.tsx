import React, { useMemo } from "react";
import "src/services/i18n";
import { useGetUsersQuery } from "src/services/api";
import "./index.scss";
import { ColumnProps, Table, TableProps } from "@xriba/ui";
import { format, parseISO } from "date-fns";
import { UserResult } from "src/types";
import QueryHandler, { QueryHandlerProps } from "src/components/QueryHandler";
import { useTranslation } from "react-i18next";
import BasePage from "layouts/base-page";

const UsersPage = (): JSX.Element => {
    const { t } = useTranslation();
    const {
        isError: usersQueryIsError,
        isLoading: usersQueryIsLoading,
        data: usersQueryData,
        refetch: usersQueryRefetch,
    } = useGetUsersQuery();
    const queryHandlerProps: QueryHandlerProps = {
        isError: usersQueryIsError,
        isLoading: usersQueryIsLoading,
    };
    const results = useMemo(() => {
        if (!usersQueryData) {
            return [];
        }

        const { results } = usersQueryData;

        return results.all_ids.map((id) => results.by_id[id]);
    }, [usersQueryData]);
    const tableProps: TableProps<UserResult> = useMemo(() => {
        return {
            results,
            idKey: "id",
            columns: [
                {
                    key: "lastName",
                    width: "150px",
                    label: t("columns.lastName"),
                    tooltip: true,
                },
                {
                    key: "firstName",
                    width: "150px",
                    label: t("columns.firstName"),
                    tooltip: true,
                },
                {
                    key: "email",
                    width: "max(250px, calc(100% - 625px))",
                    label: t("columns.email"),
                    tooltip: true,
                },
                {
                    key: "created_at",
                    width: "150px",
                    label: t("columns.created_at"),
                    render: (val) => <>{format(parseISO(val), "dd/MM/yyyy")}</>,
                },
            ] as ColumnProps<UserResult>[],
            error: usersQueryIsError ? usersQueryIsError.toString() : "",
            reload: usersQueryRefetch,
        };
    }, [usersQueryIsError, usersQueryRefetch, results, history]);

    return (
        <BasePage className={"home-page"}>
            <h1>{t("pages.users.title")}</h1>
            <QueryHandler {...queryHandlerProps}>
                <Table<UserResult> {...tableProps} />
            </QueryHandler>
        </BasePage>
    );
};

export default UsersPage;
