import React, { useCallback } from "react";
import { Button, Icon } from "src/library";

const ButtonPage = () => {
    const handleClick = useCallback(() => {
        console.log("Button clicked");
    }, []);

    return (
        <div className="page">
            <div className="page-name">Button</div>
            <div className="page-content">
                <table className="table-demo">
                    <caption>
                        On <strong>LIGHT</strong> background
                    </caption>
                    <tbody>
                        <tr>
                            <td>
                                <Button type="primary" onClick={handleClick} full={true}>
                                    Primary
                                </Button>
                            </td>
                            <td>
                                {" "}
                                <Button type="primary" onClick={handleClick} disabled={true} full={true}>
                                    Primary disabled
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Button type="secondary" onClick={handleClick} full={true}>
                                    Secondary
                                </Button>
                            </td>
                            <td>
                                {" "}
                                <Button type="secondary" onClick={handleClick} disabled={true} full={true}>
                                    Secondary disabled
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Button type="tertiary" onClick={handleClick} full={true}>
                                    Tertiary
                                </Button>
                            </td>
                            <td>
                                {" "}
                                <Button type="tertiary" onClick={handleClick} disabled={true} full={true}>
                                    Tertiary disabled
                                </Button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table className="table-demo">
                    <caption>
                        On <strong>DARK</strong> background
                    </caption>
                    <tbody>
                        <tr className="tr-inverted">
                            <td>
                                <Button type="primary" onClick={handleClick} inverted={true} full={true}>
                                    Primary
                                </Button>
                            </td>
                            <td>
                                {" "}
                                <Button
                                    type="primary"
                                    onClick={handleClick}
                                    inverted={true}
                                    disabled={true}
                                    full={true}
                                >
                                    Primary disabled
                                </Button>
                            </td>
                        </tr>
                        <tr className="tr-inverted">
                            <td>
                                <Button type="secondary" onClick={handleClick} inverted={true} full={true}>
                                    Secondary
                                </Button>
                            </td>
                            <td>
                                {" "}
                                <Button
                                    type="secondary"
                                    onClick={handleClick}
                                    inverted={true}
                                    disabled={true}
                                    full={true}
                                >
                                    Secondary disabled
                                </Button>
                            </td>
                        </tr>
                        <tr className="tr-inverted">
                            <td>
                                <Button type="tertiary" onClick={handleClick} inverted={true} full={true}>
                                    Tertiary
                                </Button>
                            </td>
                            <td>
                                {" "}
                                <Button
                                    type="tertiary"
                                    onClick={handleClick}
                                    inverted={true}
                                    disabled={true}
                                    full={true}
                                >
                                    Tertiary disabled
                                </Button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table className="table-demo">
                    <caption>
                        Different <strong>statuses</strong>
                    </caption>
                    <tbody>
                        <tr>
                            <td>
                                <Button type="primary" onClick={handleClick} full={true} color="success">
                                    Primary
                                </Button>
                            </td>
                            <td>
                                {" "}
                                <Button type="primary" onClick={handleClick} full={true} color="warning">
                                    Primary disabled
                                </Button>
                            </td>
                            <td>
                                {" "}
                                <Button type="primary" onClick={handleClick} full={true} color="error">
                                    Primary disabled
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Button type="secondary" onClick={handleClick} full={true} color="success">
                                    Secondary
                                </Button>
                            </td>
                            <td>
                                {" "}
                                <Button type="secondary" onClick={handleClick} full={true} color="warning">
                                    Secondary disabled
                                </Button>
                            </td>
                            <td>
                                {" "}
                                <Button type="secondary" onClick={handleClick} full={true} color="error">
                                    Secondary disabled
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Button type="tertiary" onClick={handleClick} full={true} color="success">
                                    Tertiary
                                </Button>
                            </td>
                            <td>
                                {" "}
                                <Button type="tertiary" onClick={handleClick} full={true} color="warning">
                                    Tertiary disabled
                                </Button>
                            </td>
                            <td>
                                {" "}
                                <Button type="tertiary" onClick={handleClick} full={true} color="error">
                                    Tertiary disabled
                                </Button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table className="table-demo">
                    <caption>
                        Different <strong>sizes</strong>
                    </caption>
                    <tbody>
                        <tr>
                            <td>
                                <Button type="primary" onClick={handleClick} full={true} size="large">
                                    Size large
                                </Button>
                            </td>
                            <td>
                                {" "}
                                <Button type="primary" onClick={handleClick} full={true} size="default">
                                    Size default
                                </Button>
                            </td>
                            <td>
                                {" "}
                                <Button type="primary" onClick={handleClick} full={true} size="small">
                                    Size small
                                </Button>
                            </td>
                            <td>
                                {" "}
                                <Button type="primary" onClick={handleClick} full={true} size="tiny">
                                    Size tiny
                                </Button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table className="table-demo">
                    <caption>
                        With <strong>icons</strong>
                    </caption>
                    <tbody>
                        <tr>
                            <td>
                                <Button type="secondary" onClick={handleClick} full={true} size="default">
                                    <Icon name="chevron_left" position="left" />
                                    Left arrow
                                </Button>
                            </td>
                            <td>
                                {" "}
                                <Button type="primary" onClick={handleClick} full={true} size="default">
                                    Right arrow
                                    <Icon name="chevron_right" position="right" />
                                </Button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ButtonPage;
