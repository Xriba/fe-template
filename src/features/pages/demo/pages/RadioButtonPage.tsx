import React, { useState } from "react";
import { RadioButton, RadioButtonOption, validationStatuses } from "src/library";

const RadioButtonPage = () => {
    const options: RadioButtonOption[] = [
        { label: "Option 1", value: "opt-1" },
        { label: "Option 2", value: "opt-2" },
    ];

    const [value, setValue] = useState("opt-1");
    const [value2, setValue2] = useState("opt-1");
    const [value3, setValue3] = useState("opt-1");
    const [value4, setValue4] = useState("opt-1");
    const [value5, setValue5] = useState("opt-1");
    const [value6, setValue6] = useState("opt-1");
    const [value7, setValue7] = useState("opt-1");
    const [value8, setValue8] = useState("opt-1");

    return (
        <div className="page">
            <div className="page-name">Radio Button</div>
            <div className="page-content">
                <RadioButton
                    label="Vertical Radio Button"
                    description="Description text"
                    name="radiobutton-1"
                    value={value}
                    options={options}
                    onChange={setValue}
                />
                <RadioButton
                    label="Horizontal Radio Button"
                    description="Description text"
                    name="radiobutton-2"
                    value={value2}
                    horizontal={true}
                    options={options}
                    onChange={setValue2}
                />
                <RadioButton
                    label="Disabled Radio Button"
                    description="Description text"
                    name="radiobutton-3"
                    value={value3}
                    disabled={true}
                    options={options}
                    onChange={setValue3}
                />
                <RadioButton
                    label="Error Radio Button"
                    name="radiobutton-4"
                    description="Description text"
                    value={value4}
                    onChange={setValue4}
                    options={options}
                    validation={{ status: validationStatuses.ERROR, message: "Error message" }}
                />
                <RadioButton
                    label="Warning Radio Button"
                    name="radiobutton-5"
                    description="Description text"
                    horizontal={true}
                    value={value5}
                    onChange={setValue5}
                    options={options}
                    validation={{ status: validationStatuses.WARNING, message: "Warning message" }}
                />
                <RadioButton
                    label="Info Radio Button"
                    name="radiobutton-6"
                    description="Description text"
                    value={value6}
                    onChange={setValue6}
                    options={options}
                    validation={{ status: validationStatuses.INFO, message: "Info message" }}
                />
                <RadioButton
                    value={value7}
                    description="No label radio button"
                    name="radiobutton-7"
                    options={options}
                    horizontal={true}
                    onChange={setValue7}
                />
                <RadioButton
                    label="Radio Button without description"
                    name="radiobutton-8"
                    value={value8}
                    options={options}
                    horizontal={true}
                    onChange={setValue8}
                />
            </div>
        </div>
    );
};

export default RadioButtonPage;
