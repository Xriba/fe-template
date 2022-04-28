import React, { useCallback } from "react";
import { Button, toast, toastTypes } from "src/library";

const ToastPage = () => {
    const openSuccess = useCallback(() => {
        toast(toastTypes.SUCCESS, "This is a success message");
    }, []);
    const openInfo = useCallback(() => {
        toast(toastTypes.INFO, "This is an info message");
    }, []);
    const openWarning = useCallback(() => {
        toast(toastTypes.WARNING, "This is a warning message");
    }, []);
    const openError = useCallback(() => {
        toast(toastTypes.ERROR, "This is an error message");
    }, []);

    return (
        <div className="page">
            <div className="page-name">Toast</div>
            <div className="page-content">
                <Button type="link" onClick={openSuccess}>
                    Show a success
                </Button>
                <Button type="link" onClick={openInfo}>
                    Show an info
                </Button>
                <Button type="link" onClick={openWarning}>
                    Show a warning
                </Button>
                <Button type="link" onClick={openError}>
                    Show an error
                </Button>
            </div>
        </div>
    );
};

export default ToastPage;
