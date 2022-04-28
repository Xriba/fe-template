import React, { useCallback, useState } from "react";
import { Button, Loading } from "src/library";

const LoadingPage = () => {
    const [loading, setLoading] = useState(false);
    const handleClick = useCallback(() => {
        if (!loading) {
            setLoading(true);

            setTimeout(() => {
                setLoading(false);
            }, 1000);
        }
    }, [loading]);

    return (
        <div className="page">
            <div className="page-name">Loading</div>
            <div className="page-content">
                <Button type="link" onClick={handleClick}>
                    Show
                </Button>
                {loading && <Loading text="Test Loading" />}
            </div>
        </div>
    );
};

export default LoadingPage;
