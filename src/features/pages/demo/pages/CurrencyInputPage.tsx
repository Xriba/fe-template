import React, { useCallback, useState } from "react";
import { CurrencyInput, validationStatuses } from "src/library";

const CurrencyInputPage = () => {
    const [value, setValue] = useState("");
    const [value2, setValue2] = useState("123456789");
    const [value3, setValue3] = useState("");
    const [value4, setValue4] = useState("123.45");
    const [value5, setValue5] = useState("123456789");
    const [value6, setValue6] = useState("123456789");
    const [value7, setValue7] = useState("325.54");
    const doNothing = useCallback(() => void 0, []);

    return (
        <div className="page">
            <div className="page-name">Currency Input</div>
            <div className="page-content">
                <CurrencyInput label="Test currency" value={value} onChange={setValue} defaultValue="" />
                <CurrencyInput label="Test currency" value={value2} onChange={setValue2} symbol="€" />
                <CurrencyInput
                    label="Test currency"
                    value={value3}
                    onChange={setValue3}
                    validation={{
                        status: validationStatuses.ERROR,
                        message: "Error message",
                    }}
                    symbol="$"
                />
                <CurrencyInput label="Test currency" value="" onChange={doNothing} symbol="£" disabled />
                <CurrencyInput label="Test currency" value={value4} onChange={setValue4} />
                <CurrencyInput
                    label="Test currency without thousand separator"
                    value={value5}
                    useGrouping={false}
                    onChange={setValue5}
                />
                <CurrencyInput
                    label="Test currency with locale en-IT"
                    value={value6}
                    onChange={setValue6}
                    locale="en-IT"
                />
                <CurrencyInput
                    label="Test currency with more than 2 decimals"
                    value={value7}
                    decimals={3}
                    onChange={setValue7}
                />
            </div>
        </div>
    );
};

export default CurrencyInputPage;
