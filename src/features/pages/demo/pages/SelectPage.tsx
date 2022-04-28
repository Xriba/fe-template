import React, { useState } from "react";
import { Icon, Select, validationStatuses } from "src/library";

const SelectPage = () => {
    const [value1, setValue1] = useState("3");
    const [value2, setValue2] = useState("3");
    const [value3, setValue3] = useState("3");
    const [value4, setValue4] = useState("3");
    const [value5, setValue5] = useState("3");
    const [value6, setValue6] = useState("3");
    const [value7, setValue7] = useState("3");
    const [value8, setValue8] = useState("3");
    const [value1i, setValue1i] = useState("3");
    const [value2i, setValue2i] = useState("3");
    const [value3i, setValue3i] = useState("3");
    const [value4i, setValue4i] = useState("3");
    const [value5i, setValue5i] = useState("3");
    const [value6i, setValue6i] = useState("3");
    const [value7i, setValue7i] = useState("3");
    const [value8i, setValue8i] = useState("3");

    return (
        <div className="page">
            <div className="page-name">Select</div>
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
                                <Select label="Label" description="Support text" value={value1} onChange={setValue1}>
                                    <option value="1">Value 1</option>
                                    <option value="2">Value 2</option>
                                    <option value="3">Value 3</option>
                                    <option value="4">Value 4</option>
                                    <option value="5">Value 5</option>
                                </Select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Select label="Label" description="Support text" value={value2} onChange={setValue2}>
                                    <option value="1">Value 1</option>
                                    <option value="2">Value 2</option>
                                    <option value="3">Value 3</option>
                                    <option value="4">Value 4</option>
                                    <option value="5">Value 5</option>
                                </Select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Select
                                    label="Label"
                                    description="Support text"
                                    value={value3}
                                    onChange={setValue3}
                                    disabled={true}
                                >
                                    <option value="1">Value 1</option>
                                    <option value="2">Value 2</option>
                                    <option value="3">Value 3</option>
                                    <option value="4">Value 4</option>
                                    <option value="5">Value 5</option>
                                </Select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Select
                                    label="Label"
                                    description="Support text"
                                    value={value4}
                                    onChange={setValue4}
                                    disabled={true}
                                >
                                    <option value="1">Value 1</option>
                                    <option value="2">Value 2</option>
                                    <option value="3">Value 3</option>
                                    <option value="4">Value 4</option>
                                    <option value="5">Value 5</option>
                                </Select>
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
                                <Select
                                    label="Label"
                                    description="Support text"
                                    value={value1i}
                                    onChange={setValue1i}
                                    inverted={true}
                                >
                                    <option value="1">Value 1</option>
                                    <option value="2">Value 2</option>
                                    <option value="3">Value 3</option>
                                    <option value="4">Value 4</option>
                                    <option value="5">Value 5</option>
                                </Select>
                            </td>
                        </tr>
                        <tr className="tr-inverted">
                            <td>
                                <Select
                                    label="Label"
                                    description="Support text"
                                    value={value2i}
                                    onChange={setValue2i}
                                    inverted={true}
                                >
                                    <option value="1">Value 1</option>
                                    <option value="2">Value 2</option>
                                    <option value="3">Value 3</option>
                                    <option value="4">Value 4</option>
                                    <option value="5">Value 5</option>
                                </Select>
                            </td>
                        </tr>
                        <tr className="tr-inverted">
                            <td>
                                <Select
                                    label="Label"
                                    description="Support text"
                                    value={value3i}
                                    onChange={setValue3i}
                                    disabled={true}
                                    inverted={true}
                                >
                                    <option value="1">Value 1</option>
                                    <option value="2">Value 2</option>
                                    <option value="3">Value 3</option>
                                    <option value="4">Value 4</option>
                                    <option value="5">Value 5</option>
                                </Select>
                            </td>
                        </tr>
                        <tr className="tr-inverted">
                            <td>
                                <Select
                                    label="Label"
                                    description="Support text"
                                    value={value4i}
                                    onChange={setValue4i}
                                    disabled={true}
                                    inverted={true}
                                >
                                    <option value="1">Value 1</option>
                                    <option value="2">Value 2</option>
                                    <option value="3">Value 3</option>
                                    <option value="4">Value 4</option>
                                    <option value="5">Value 5</option>
                                </Select>
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
                                <Select
                                    label="Label"
                                    description="Support text"
                                    value={value5}
                                    onChange={setValue5}
                                    validation={{
                                        status: validationStatuses.INFO,
                                        message: "Info message",
                                    }}
                                >
                                    <option value="1">Value 1</option>
                                    <option value="2">Value 2</option>
                                    <option value="3">Value 3</option>
                                    <option value="4">Value 4</option>
                                    <option value="5">Value 5</option>
                                </Select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Select
                                    label="Label"
                                    description="Support text"
                                    value={value6}
                                    onChange={setValue6}
                                    validation={{
                                        status: validationStatuses.WARNING,
                                        message: "Warning message",
                                    }}
                                >
                                    <option value="1">Value 1</option>
                                    <option value="2">Value 2</option>
                                    <option value="3">Value 3</option>
                                    <option value="4">Value 4</option>
                                    <option value="5">Value 5</option>
                                </Select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Select
                                    label="Label"
                                    description="Support text"
                                    value={value7}
                                    onChange={setValue7}
                                    validation={{
                                        status: validationStatuses.ERROR,
                                        message: "Error message",
                                    }}
                                >
                                    <option value="1">Value 1</option>
                                    <option value="2">Value 2</option>
                                    <option value="3">Value 3</option>
                                    <option value="4">Value 4</option>
                                    <option value="5">Value 5</option>
                                </Select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Select
                                    label="Label"
                                    description="Support text"
                                    value={value8}
                                    onChange={setValue8}
                                    symbol={<Icon size="small" name="search" />}
                                >
                                    <option value="1">Value 1</option>
                                    <option value="2">Value 2</option>
                                    <option value="3">Value 3</option>
                                    <option value="4">Value 4</option>
                                    <option value="5">Value 5</option>
                                </Select>
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
                                <Select
                                    label="Label"
                                    description="Support text"
                                    value={value5i}
                                    onChange={setValue5i}
                                    validation={{
                                        status: validationStatuses.INFO,
                                        message: "Info message",
                                    }}
                                    inverted={true}
                                >
                                    <option value="1">Value 1</option>
                                    <option value="2">Value 2</option>
                                    <option value="3">Value 3</option>
                                    <option value="4">Value 4</option>
                                    <option value="5">Value 5</option>
                                </Select>
                            </td>
                        </tr>
                        <tr className="tr-inverted">
                            <td>
                                <Select
                                    label="Label"
                                    description="Support text"
                                    value={value6i}
                                    onChange={setValue6i}
                                    validation={{
                                        status: validationStatuses.WARNING,
                                        message: "Warning message",
                                    }}
                                    inverted={true}
                                >
                                    <option value="1">Value 1</option>
                                    <option value="2">Value 2</option>
                                    <option value="3">Value 3</option>
                                    <option value="4">Value 4</option>
                                    <option value="5">Value 5</option>
                                </Select>
                            </td>
                        </tr>
                        <tr className="tr-inverted">
                            <td>
                                <Select
                                    label="Label"
                                    description="Support text"
                                    value={value7i}
                                    onChange={setValue7i}
                                    validation={{
                                        status: validationStatuses.ERROR,
                                        message: "Error message",
                                    }}
                                    inverted={true}
                                >
                                    <option value="1">Value 1</option>
                                    <option value="2">Value 2</option>
                                    <option value="3">Value 3</option>
                                    <option value="4">Value 4</option>
                                    <option value="5">Value 5</option>
                                </Select>
                            </td>
                        </tr>
                        <tr className="tr-inverted">
                            <td>
                                <Select
                                    label="Label"
                                    description="Support text"
                                    value={value8i}
                                    onChange={setValue8i}
                                    symbol={<Icon size="default" name="search" />}
                                    inverted={true}
                                >
                                    <option value="1">Value 1</option>
                                    <option value="2">Value 2</option>
                                    <option value="3">Value 3</option>
                                    <option value="4">Value 4</option>
                                    <option value="5">Value 5</option>
                                </Select>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SelectPage;
