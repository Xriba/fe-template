import React from "react";
import { Tooltip } from "src/library";

const TooltipPage = () => {
    return (
        <div className="page">
            <div className="page-name">Tooltip</div>
            <div className="page-content">
                <Tooltip content="Tooltip text">
                    <p className="Tooltip">Hover over this text to show tooltip</p>
                </Tooltip>
                <Tooltip content="Text with info" type="info">
                    <p className="Tooltip">Tooltip with info</p>
                </Tooltip>
                <Tooltip content="Text with warning" type="warning">
                    <p className="Tooltip">Tooltip with warning</p>
                </Tooltip>
                <Tooltip
                    content="Text with error. Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum."
                    type="error"
                >
                    <p className="Tooltip">Tooltip with error</p>
                </Tooltip>
                <Tooltip content="">
                    <p className="Tooltip">Empty tooltip</p>
                </Tooltip>
            </div>
        </div>
    );
};

export default TooltipPage;
