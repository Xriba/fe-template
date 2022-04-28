import React, { useState } from "react";
import { Icon, Input, validationStatuses } from "src/library";

const InputPage = () => {
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("Filled");
    const [value3, setValue3] = useState("");
    const [value4, setValue4] = useState("Filled disabled");
    const [value5, setValue5] = useState("Filled info");
    const [value6, setValue6] = useState("Filled warning");
    const [value7, setValue7] = useState("Filled error");
    const [value8, setValue8] = useState("Filled symbol");
    const [value1i, setValue1i] = useState("");
    const [value2i, setValue2i] = useState("Filled");
    const [value3i, setValue3i] = useState("");
    const [value4i, setValue4i] = useState("Filled disabled");
    const [value5i, setValue5i] = useState("Filled info");
    const [value6i, setValue6i] = useState("Filled warning");
    const [value7i, setValue7i] = useState("Filled error");
    const [value8i, setValue8i] = useState("Filled symbol");

    return (
        <div className="page">
            <div className="page-name">Input</div>
            <div className="page-content">
                <table className="table-demo">
                    <caption>
                        Basic cases
                        <br />
                        on <strong>LIGHT</strong> background
                    </caption>
                    <tbody>
                        <tr>
                            <td>
                                <Input
                                    label="Label"
                                    placeholder="Empty"
                                    description="Support text"
                                    value={value1}
                                    onChange={setValue1}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Input
                                    label="Label"
                                    placeholder="Empty"
                                    description="Support text"
                                    value={value2}
                                    onChange={setValue2}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Input
                                    label="Label"
                                    placeholder="Empty disabled"
                                    description="Support text"
                                    value={value3}
                                    onChange={setValue3}
                                    disabled={true}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Input
                                    label="Label"
                                    placeholder="Empty disabled"
                                    description="Support text"
                                    value={value4}
                                    onChange={setValue4}
                                    disabled={true}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table className="table-demo">
                    <caption>
                        Basic cases
                        <br />
                        on <strong>DARK</strong> background
                    </caption>
                    <tbody>
                        <tr className="tr-inverted">
                            <td>
                                <Input
                                    label="Label"
                                    placeholder="Empty"
                                    description="Support text"
                                    value={value1i}
                                    onChange={setValue1i}
                                    inverted={true}
                                />
                            </td>
                        </tr>
                        <tr className="tr-inverted">
                            <td>
                                <Input
                                    label="Label"
                                    placeholder="Empty"
                                    description="Support text"
                                    value={value2i}
                                    onChange={setValue2i}
                                    inverted={true}
                                />
                            </td>
                        </tr>
                        <tr className="tr-inverted">
                            <td>
                                <Input
                                    label="Label"
                                    placeholder="Empty disabled"
                                    description="Support text"
                                    value={value3i}
                                    onChange={setValue3i}
                                    disabled={true}
                                    inverted={true}
                                />
                            </td>
                        </tr>
                        <tr className="tr-inverted">
                            <td>
                                <Input
                                    label="Label"
                                    placeholder="Empty disabled"
                                    description="Support text"
                                    value={value4i}
                                    onChange={setValue4i}
                                    disabled={true}
                                    inverted={true}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table className="table-demo">
                    <caption>
                        Special cases
                        <br />
                        on <strong>LIGHT</strong> background
                    </caption>
                    <tbody>
                        <tr>
                            <td>
                                <Input
                                    label="Label"
                                    placeholder="Empty info"
                                    description="Support text"
                                    value={value5}
                                    onChange={setValue5}
                                    validation={{
                                        status: validationStatuses.INFO,
                                        message: "Info message",
                                    }}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Input
                                    label="Label"
                                    placeholder="Empty warning"
                                    description="Support text"
                                    value={value6}
                                    onChange={setValue6}
                                    validation={{
                                        status: validationStatuses.WARNING,
                                        message: "Warning message",
                                    }}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Input
                                    label="Label"
                                    placeholder="Empty error"
                                    description="Support text"
                                    value={value7}
                                    onChange={setValue7}
                                    validation={{
                                        status: validationStatuses.ERROR,
                                        message: "Error message",
                                    }}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Input
                                    label="Label"
                                    placeholder="Empty symbol"
                                    description="Support text"
                                    value={value8}
                                    onChange={setValue8}
                                    symbol={<Icon size="small" name="search" />}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table className="table-demo">
                    <caption>
                        Special cases
                        <br />
                        on <strong>DARK</strong> background
                    </caption>
                    <tbody>
                        <tr className="tr-inverted">
                            <td>
                                <Input
                                    label="Label"
                                    placeholder="Empty info"
                                    description="Support text"
                                    value={value5i}
                                    onChange={setValue5i}
                                    validation={{
                                        status: validationStatuses.INFO,
                                        message: "Info message",
                                    }}
                                    inverted={true}
                                />
                            </td>
                        </tr>
                        <tr className="tr-inverted">
                            <td>
                                <Input
                                    label="Label"
                                    placeholder="Empty warning"
                                    description="Support text"
                                    value={value6i}
                                    onChange={setValue6i}
                                    validation={{
                                        status: validationStatuses.WARNING,
                                        message: "Warning message",
                                    }}
                                    inverted={true}
                                />
                            </td>
                        </tr>
                        <tr className="tr-inverted">
                            <td>
                                <Input
                                    label="Label"
                                    placeholder="Empty error"
                                    description="Support text"
                                    value={value7i}
                                    onChange={setValue7i}
                                    validation={{
                                        status: validationStatuses.ERROR,
                                        message: "Error message",
                                    }}
                                    inverted={true}
                                />
                            </td>
                        </tr>
                        <tr className="tr-inverted">
                            <td>
                                <Input
                                    label="Label"
                                    placeholder="Empty symbol"
                                    description="Support text"
                                    value={value8i}
                                    onChange={setValue8i}
                                    symbol={<Icon size="default" name="search" />}
                                    inverted={true}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <hr className="separator" />
            </div>
        </div>
    );
};

export default InputPage;
