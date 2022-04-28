import React, { useMemo } from "react";
import { Breadcrumbs } from "src/library";

const BreadcrumbsPage = () => {
    const paths = useMemo(
        () => [
            {
                label: "XribaBooks Contabili",
                onClick: () => void 0,
            },
            {
                label: "Da contabilizzare",
                onClick: () => void 0,
            },
        ],
        []
    );
    return (
        <div className="page">
            <div className="page-name">Breadcrumbs</div>
            <div className="page-content">
                <Breadcrumbs paths={paths} />
            </div>
        </div>
    );
};

export default BreadcrumbsPage;
