
import * as React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import {PageNotFound} from "./errors";
import {MainPage} from "../pages";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<MainPage />} />
                <Route path={"*"} element={<PageNotFound />}/>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter