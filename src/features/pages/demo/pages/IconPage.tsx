import React from "react";
import { Icon } from "src/library";

const IconPage = () => {
    return (
        <div className="page">
            <div className="page-name">Icon</div>
            <div className="page-content">
                <Icon name="get_app" />
                <Icon name="get_app" size="small" />
                <Icon name="get_app" size="tiny" />
                <Icon name="info_outline" color="info" />
                <Icon name="check_circle" color="success" />
                <Icon name="warning" color="warning" />
                <Icon name="report" color="error" />
            </div>
        </div>
    );
};

export default IconPage;
