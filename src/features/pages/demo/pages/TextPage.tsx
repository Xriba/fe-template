import React from "react";
import { Text } from "src/library";

const TextPage = () => {
    return (
        <div className="page">
            <div className="page-name">Text</div>
            <div className="page-content">
                <Text>Default</Text>
                <Text size="small">Small</Text>
                <Text size="large">Large</Text>
                <Text color="success">Success</Text>
                <Text color="warning">Warning</Text>
                <Text color="error">Error</Text>
                <Text color="light">Light</Text>
            </div>
        </div>
    );
};

export default TextPage;
