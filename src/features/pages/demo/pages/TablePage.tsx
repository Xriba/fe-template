import React, { useCallback, useMemo, useReducer, useState } from "react";
import produce from "immer";
// noinspection ES6CheckImport
import {
    Autocomplete,
    AutocompleteColumn,
    Button,
    ColumnGroupProps,
    ColumnProps,
    CurrencyEditing,
    DateEditing,
    Icon,
    ItemData,
    Table,
    TableProps,
    TableResult,
    TextEditing,
    Validation,
    validationStatuses,
} from "src/library";

interface Result extends TableResult {
    key: number;
    company_vat: string;
    company_name: string;
    number: number;
}

interface EditableResult extends Result {
    description: string;
    masked: string;
    date: string;
    value: string;
    category: string;
    validation: Validation;
    disabled: boolean;
}

interface State {
    results: Result[];
}

interface Category extends ItemData {
    codice: string;
    long: string;
    descrizione: string;
    section: string;
}

const categoriesData: Category[] = new Array(30).fill("").map((val, index) => {
    const section = index === 3 ? "Molto usati" : index === 4 ? "Altri" : "";

    return {
        codice: 1000 + index + "",
        long: "This is a very long text used to test the text overlapping bug in autocomplete columns",
        descrizione: "Opzione " + (index + 1),
        section,
    };
});

const TablePage = () => {
    const [selected, setSelected] = useState<Result[]>([]);
    const [singleSelected, setSingleSelected] = useState<Result[]>([]);
    const [sortBy, setSortBy] = useState<{
        key: "key" | "company_vat" | "company_name" | "number";
        type: "asc" | "desc";
    } | null>({
        key: "company_vat",
        type: "asc",
    });
    const getResult = useCallback((index: number): Result => {
        const num = index + 1;
        const types = ["Srl", "Sarl", "Spa", "Sapa", "Snc"];
        const type = types[index % 5];

        return {
            key: index,
            company_vat: `IT00000000${100 + num}`,
            company_name: `Azienda ${type} ${100 + num}`,
            number: 20 - (index % 3),
        };
    }, []);
    const results = useMemo(() => {
        const resultsArr = [getResult(0), getResult(1), getResult(2), getResult(3), getResult(4)];

        return !sortBy
            ? resultsArr
            : resultsArr.sort((resultA: Result, resultB: Result) => {
                  const { key, type } = sortBy;
                  const resKeyA = resultA[key];
                  const resKeyB = resultB[key];
                  const res = resKeyA > resKeyB ? 1 : resKeyA < resKeyB ? -1 : 0;

                  return type === "asc" ? res : -res;
              });
    }, [getResult, sortBy]);

    // Tables props

    const tableProps: TableProps<Result> = useMemo(
        () => ({
            results,
            error: "",
            columns: [
                {
                    key: "company_vat",
                    label: "Partita IVA",
                    width: "110px",
                },
                {
                    key: "company_name",
                    label: "Azienda",
                    width: "120px",
                    tooltip: true,
                },
                {
                    key: "number",
                    label: "N. documenti",
                    width: "120px",
                    align: "right",
                },
            ] as ColumnProps<Result>[],
            idKey: "key",
            caption: "Basic table",
            reload: () => {
                console.log("Ricaricata tabella");
            },
        }),
        [results]
    );

    const tablePropsWithNoResults: TableProps<Result> = useMemo(
        () => ({
            results: [],
            error: "",
            columns: [
                {
                    key: "company_vat",
                    label: "Partita IVA",
                    width: "110px",
                },
                {
                    key: "company_name",
                    label: "Azienda",
                    width: "120px",
                    tooltip: true,
                },
                {
                    key: "number",
                    label: "N. documenti",
                    width: "120px",
                    align: "right",
                },
            ] as ColumnProps<Result>[],
            idKey: "key",
            caption: "Basic table",
            reload: () => {
                console.log("Ricaricata tabella");
            },
        }),
        []
    );
    const tablePropsWithSorting: TableProps<Result> = useMemo(
        () =>
            ({
                ...tableProps,
                columns: (tableProps.columns as ColumnProps<Result>[]).map(
                    (column): ColumnProps<Result> => ({
                        ...column,
                        sortKey: column.key,
                    })
                ),
                sortBy,
                setSortBy,
                caption: "Table with sorting",
            } as TableProps<Result>),
        [tableProps, sortBy]
    );
    const tablePropsWithAction: TableProps<Result> = useMemo(
        () => ({
            ...tableProps,
            actionsColumn: {
                title: "Scarica CSV",
                width: "125px",
            },
            actions: [
                () => (
                    <Button type="link" onClick={() => console.log("Scaricato CSV")}>
                        Scarica CSV
                        <Icon name="get_app" size="small" position="right" />
                    </Button>
                ),
            ],
            caption: "Table with action column",
        }),
        [tableProps]
    );
    const tablePropsWithMultiselect: TableProps<Result> = useMemo(
        () => ({
            ...tableProps,
            multiSelect: true,
            nonSelectable: {
                1: "Test 1",
                4: "Test 4",
            },
            selected,
            onSelect: (selectedRows: Result[]) => {
                setSelected(selectedRows);
            },
            caption: "Table with multiple selection",
        }),
        [tableProps, selected]
    );
    const tablePropsWithGroupedColumns: TableProps<Result> = useMemo(
        () => ({
            ...tableProps,
            columns: [
                {
                    key: "1",
                    label: "Group 1",
                    width: "340px",
                    subColumns: [...tableProps.columns],
                },
                {
                    key: "2",
                    label: "Group 2",
                    width: "340px",
                    subColumns: [...tableProps.columns],
                },
            ] as ColumnGroupProps<Result>[],
            groupedColumns: true,
            caption: "Table with grouped columns",
        }),
        [tableProps]
    );

    // Cell renders
    const getEditableResult = useCallback(
        (index: number): EditableResult => {
            const modulus = index % 4;
            const status = !modulus
                ? validationStatuses.SUCCESS
                : modulus === 1
                ? validationStatuses.INFO
                : modulus === 2
                ? validationStatuses.WARNING
                : validationStatuses.ERROR;
            const message = !modulus
                ? ""
                : modulus === 1
                ? "This is an info message"
                : modulus === 2
                ? "This is a warning message"
                : "This is an error message. Lorem ipsum sit dolor amet lorem ipsum sit dolor amet lorem ipsum sit dolor amet lorem ipsum sit dolor amet";
            const disabled = index === 4;

            return {
                ...getResult(index),
                description: "",
                masked: "",
                date: "",
                value: "",
                category: "",
                validation: {
                    status,
                    message,
                },
                disabled,
            };
        },
        [getResult]
    );
    const getInitialResults = useCallback(
        () => ({
            results: [
                getEditableResult(0),
                getEditableResult(1),
                getEditableResult(2),
                getEditableResult(3),
                getEditableResult(4),
            ],
        }),
        [getEditableResult]
    );
    type Action = {
        payload: {
            field:
                | "key"
                | "company_vat"
                | "company_name"
                | "number"
                | "description"
                | "masked"
                | "date"
                | "value"
                | "category";
            value: string | number;
            index: number;
        };
    };
    const resultsReducer = useCallback((state: State, action: Action): State => {
        const { field, value, index } = action.payload;

        return produce(state as State, (stateDraft: State) => {
            stateDraft.results[index][field as string] = value;
        });
    }, []);
    // noinspection JSCheckFunctionSignatures
    const [editableResults, dispatchField] = useReducer(resultsReducer, undefined, getInitialResults);
    const tablePropsWithCellRenders: TableProps<EditableResult> = useMemo(
        () =>
            ({
                ...tableProps,
                results: editableResults["results"],
                columns: [
                    ...tableProps.columns,
                    {
                        key: "description",
                        label: "Text",
                        width: "120px",
                        render: (val: string, result: EditableResult, index: number) => (
                            <TextEditing
                                invalid={true}
                                value={val}
                                validation={result.validation}
                                disabled={result.disabled}
                                onChange={(value: string) =>
                                    dispatchField({
                                        payload: {
                                            field: "description",
                                            value,
                                            index,
                                        },
                                    })
                                }
                            />
                        ),
                    },
                    {
                        key: "masked",
                        label: "Masked input",
                        width: "130px",
                        render: (val: string, result: EditableResult, index: number) => (
                            <TextEditing
                                value={val}
                                validation={result.validation}
                                mask={{
                                    blocks: [3, 3, 2, 2, 2],
                                    delimiters: [" ", " ", "."],
                                    prefix: "+39",
                                    rawValueTrimPrefix: true,
                                    numericOnly: true,
                                }}
                                maxLength={16}
                                disabled={result.disabled}
                                onChange={(value: string) =>
                                    dispatchField({
                                        payload: {
                                            field: "masked",
                                            value,
                                            index,
                                        },
                                    })
                                }
                            />
                        ),
                    },
                    {
                        key: "date",
                        label: "Date",
                        width: "120px",
                        render: (val: string, result: EditableResult, index: number) => (
                            <DateEditing
                                value={val}
                                validation={result.validation}
                                disabled={result.disabled}
                                onChange={(value) =>
                                    dispatchField({
                                        payload: {
                                            field: "date",
                                            value,
                                            index,
                                        },
                                    })
                                }
                            />
                        ),
                    },
                    {
                        key: "value",
                        label: "Currency",
                        width: "130px",
                        render: (val: string, result: EditableResult, index: number) => (
                            <CurrencyEditing
                                invalid={true}
                                value={val}
                                defaultValue=""
                                validation={result.validation}
                                disabled={result.disabled}
                                onChange={(value: string) =>
                                    dispatchField({
                                        payload: {
                                            field: "value",
                                            value,
                                            index,
                                        },
                                    })
                                }
                            />
                        ),
                    },
                    {
                        key: "category",
                        label: "Autocomplete",
                        width: "120px",
                        render: (val: string, result: EditableResult, index: number) => {
                            return (
                                <Autocomplete<Category>
                                    id={`category-${index}`}
                                    value={val}
                                    data={categoriesData}
                                    disabled={result.disabled}
                                    validation={result.validation}
                                    columns={
                                        [
                                            {
                                                label: "Codice",
                                                key: "codice",
                                                width: "125px",
                                            },
                                            {
                                                label: "Long texts",
                                                key: "long",
                                                width: "150px",
                                                tooltip: true,
                                            },
                                            {
                                                label: "Descrizione",
                                                key: "descrizione",
                                                width: "auto",
                                                tooltip: true,
                                            },
                                        ] as AutocompleteColumn<Category>[]
                                    }
                                    getSuggestionValue={(suggestion) => suggestion.codice}
                                    onChange={({ codice }: Category) => {
                                        dispatchField({
                                            payload: {
                                                field: "category",
                                                value: codice,
                                                index,
                                            },
                                        });
                                    }}
                                />
                            );
                        },
                    },
                ],
                selected: singleSelected,
                onSelect: (selectedRows) => {
                    setSingleSelected(selectedRows);
                },
                caption: "Table with cell renders",
            } as TableProps<EditableResult>),
        [tableProps, editableResults, singleSelected]
    );

    const sortingImages = [
        <svg key="0" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.91665 12.8333L12.8333 8.59136L10.7121 8.59136L10.7121 2.22719L9.12119 2.22719L9.12119 8.59136L6.99998 8.59136L9.91665 12.8333Z"
                fill="#C5C8D2"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.87877 11.7726L4.87877 5.40954L6.99998 5.40954L4.08331 1.16659L1.16665 5.40954L3.28786 5.40954L3.28786 11.7726L4.87877 11.7726Z"
            />
        </svg>,
        <svg key="1" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.91665 12.8333L12.8333 8.59136L10.7121 8.59136L10.7121 2.22719L9.12119 2.22719L9.12119 8.59136L6.99998 8.59136L9.91665 12.8333Z"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.87877 11.7726L4.87877 5.40954L6.99998 5.40954L4.08331 1.16659L1.16665 5.40954L3.28786 5.40954L3.28786 11.7726L4.87877 11.7726Z"
                fill="#C5C8D2"
            />
        </svg>,
        <svg key="2" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.91665 12.8333L12.8333 8.59136L10.7121 8.59136L10.7121 2.22719L9.12119 2.22719L9.12119 8.59136L6.99998 8.59136L9.91665 12.8333ZM4.87877 11.7726L4.87877 5.40954L6.99998 5.40954L4.08331 1.16659L1.16665 5.40954L3.28786 5.40954L3.28786 11.7726L4.87877 11.7726Z"
                fill="#C5C8D2"
            />
        </svg>,
    ];

    return (
        <div className="page">
            <div className="page-name">Table</div>
            <div className="page-content">
                <div className="page-content-wrapper">
                    <Table<Result> {...tableProps} />
                    <Table<Result> {...tablePropsWithSorting} />
                    <Table<Result> {...tablePropsWithAction} />
                    <Table<Result> {...tablePropsWithMultiselect} />
                    <Table<Result> {...tablePropsWithGroupedColumns} />
                    <Table<EditableResult> {...tablePropsWithCellRenders} />
                    <Table<Result>
                        {...tablePropsWithSorting}
                        caption={"Table with sorting left and custom image"}
                        sortingProps={{
                            alignment: "left",
                            image_asc: sortingImages[1],
                            image_desc: sortingImages[0],
                            image_none: sortingImages[2],
                        }}
                    />
                    <Table<Result>
                        {...tablePropsWithSorting}
                        caption={"Table with sorting right and custom image"}
                        sortingProps={{
                            alignment: "right",
                            image_asc: sortingImages[1],
                            image_desc: sortingImages[0],
                            image_none: sortingImages[2],
                        }}
                    />
                    <Table<Result>
                        {...tablePropsWithNoResults}
                        caption={"Table with skeleton loading"}
                        loadingProps={{ isLoading: true }}
                    />
                    <Table<Result>
                        {...tablePropsWithNoResults}
                        caption={"Table with skeleton loading 3 rows"}
                        loadingProps={{ isLoading: true, rows: 3 }}
                    />
                </div>
            </div>
        </div>
    );
};

export default TablePage;
