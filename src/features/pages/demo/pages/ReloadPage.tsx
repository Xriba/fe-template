import React, { useCallback } from "react";
import { Reload } from "src/library";

const ReloadPage = () => {
    const handleReload = useCallback(() => {
        console.log("Reload clicked");
    }, []);

    return (
        <div className="page">
            <div className="page-name">Reload</div>
            <div className="page-content">
                <Reload error="Errore caricamento dati" reload={handleReload} />
            </div>
        </div>
    );
};

export default ReloadPage;
