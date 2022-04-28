import React, { useCallback, useState } from "react";
import { DateInput, validationStatuses } from "src/library";

const DateInputPage = () => {
    const [value, setValue] = useState("20/10/2020");
    const [value2, setValue2] = useState("");
    const doNothing = useCallback(() => void 0, []);

    return (
        <div className="page">
            <div className="page-name">Date Input</div>
            <div className="page-content">
                <DateInput label="Test date" value={value} onChange={setValue} />
                <DateInput
                    label="Test date"
                    value={value2}
                    onChange={setValue2}
                    validation={{
                        status: validationStatuses.ERROR,
                        message: "Error message",
                    }}
                />
                <DateInput label="Test date" value="20/10/2020" onChange={doNothing} disabled />
            </div>
        </div>
    );
};

export default DateInputPage;
