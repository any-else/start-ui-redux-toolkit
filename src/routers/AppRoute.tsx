import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductManage from "../pages/ProductManage/ProductManage";

const AppRoute: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductManage />}></Route>
    </Routes>
  );
};

export default AppRoute;
