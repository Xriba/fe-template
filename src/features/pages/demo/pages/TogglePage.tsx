import React, { useState } from "react";
import { Toggle } from "src/library";

const TooltipPage = () => {
    const [status, setStatus] = useState(false);
    return (
        <div className="page">
            <div className="page-name">Toggle</div>
            <div className="page-content">
                <Toggle status={status} onChange={setStatus} title={"Normal behaviour"} />
                <Toggle status={false} onChange={() => void 0} disabled={true} title={"Disabled"} />
                <Toggle status={true} onChange={() => void 0} disabled={true} title={"Disabled status true"} />
            </div>
        </div>
    );
};

export default TooltipPage;
