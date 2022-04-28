import React from "react";
import { Heading } from "src/library";

const HeadingPage = () => {
    return (
        <div className="page">
            <div className="page-name">Heading</div>
            <div className="page-content">
                <Heading level="1">Documenti da contabilizzare</Heading>
            </div>
        </div>
    );
};

export default HeadingPage;
