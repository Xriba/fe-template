/* istanbul ignore file */

import React from "react";
import { Route, Routes } from "react-router-dom";
import DemoPage from "pages/demo";
import ApiPage from "pages/api";

export const Router = (): JSX.Element => (
    <Routes>
        <Route path={"/"} element={<DemoPage />} />
        <Route path={"/api"} element={<ApiPage />} />
    </Routes>
);

export default Router;
