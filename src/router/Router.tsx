import React from 'react';
import AdminTest from "../page/AdminTest";
import ErrorPage from "../page/ErrorPage";
import Test from "../page/Test";
import {Routes, Route} from "react-router-dom";
import {AllByText} from "@testing-library/react";


const Router = () => {
    return (
        <Routes>
            <Route element={<AdminTest/>} path={'/'}/>
            <Route element={<ErrorPage/>} path={'/error'}/>
            <Route element={<Test/>} path={'/test'}/>
        </Routes>
    );
};

export default Router;