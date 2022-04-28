import React, { useState } from "react";
import { Switch } from "src/library";

const InputPage = () => {
    const options = [
        { value: "A", description: "Option A" },
        { value: "B", description: "Option B" },
        { value: "C", description: "Option C" },
        { value: "D", description: "Option D" },
    ];
    const [value, setValue] = useState("D");
    const [value2, setValue2] = useState("D");

    return (
        <div className="page">
            <div className="page-name">Switch</div>
            <div className="page-content">
                <Switch options={options} value={value} onChange={setValue} />
                <Switch options={options} value={value2} onChange={setValue2} disabled={true} />
            </div>
        </div>
    );
};

export default InputPage;
