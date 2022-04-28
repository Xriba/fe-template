import React, { useState } from "react";
import { Checkbox, validationStatuses } from "src/library";

const CheckboxPage = () => {
    const [value, setValue] = useState(true);
    const [value2, setValue2] = useState(true);
    const [value3, setValue3] = useState(false);
    const [value4, setValue4] = useState(true);
    const [value5, setValue5] = useState(false);
    const [value6, setValue6] = useState(true);
    const [value7, setValue7] = useState(true);

    return (
        <div className="page">
            <div className="page-name">Checkbox</div>
            <div className="page-content">
                <Checkbox
                    label="Checkbox"
                    description="Description text"
                    name="checkbox"
                    value={value}
                    onChange={setValue}
                />
                <Checkbox
                    label="Checkbox"
                    name="checkbox"
                    description="Description text"
                    value={value4}
                    onChange={setValue4}
                    validation={{ status: validationStatuses.ERROR, message: "Error message" }}
                />
                <Checkbox
                    label="Checkbox"
                    name="checkbox"
                    description="Description text"
                    value={value5}
                    onChange={setValue5}
                    validation={{ status: validationStatuses.WARNING, message: "Warning message" }}
                />
                <Checkbox
                    label="Checkbox"
                    name="checkbox"
                    description="Description text"
                    value={value6}
                    onChange={setValue6}
                    validation={{ status: validationStatuses.INFO, message: "Info message" }}
                />
                <Checkbox
                    label="Checkbox"
                    name="checkbox"
                    description="Disabled checkbox"
                    value={value2}
                    onChange={setValue2}
                    disabled={true}
                />
                <Checkbox value={value3} description="No label checkbox" onChange={setValue3} />
                <Checkbox label="Checkbox without description" name="checkbox" value={value7} onChange={setValue7} />
            </div>
        </div>
    );
};

export default CheckboxPage;
