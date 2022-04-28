import React from "react";
import { Progress } from "src/library";

const InputPage = () => (
    <div className="page">
        <div className="page-name">Progress</div>
        <div className="page-content">
            <Progress percentage={0} />
            <Progress percentage={50} />
            <Progress percentage={100} />
        </div>
    </div>
);

export default InputPage;
