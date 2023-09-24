import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductManage from "../pages/ProductManage/ProductManage";
import TodoPage from "../pages/TodoPage/TodoPage";

const AppRoute: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductManage />} />
      <Route path="/todo" element={<TodoPage />} />
    </Routes>
  );
};

export default AppRoute;
