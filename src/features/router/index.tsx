/* istanbul ignore file */

import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "pages/home";
import UsersPage from "pages/users";

export const Router = (): JSX.Element => (
    <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/users"} element={<UsersPage />} />
    </Routes>
);

export default Router;
