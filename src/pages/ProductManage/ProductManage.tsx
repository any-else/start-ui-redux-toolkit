import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/common/Button/Button";
import Modal from "../../components/common/Modal/Modal";
import ProductList from "../../components/ProductList/ProductList";
import ProductForm from "../../components/ProductForm/ProductForm";

const ProductManage: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="grid grid-cols-5">
      <Navbar />
      <main className="col-span-4 bg-cyan-50 px-12 h-100">
        <h1 className="mt-6 text-cyan-900 mb-2">#1. Page Quản lý Sản Phẩm</h1>
        <Button
          title="Tạo mới sản phẩm"
          className="text-cyan-900"
          onClick={openModal}
        />
        <ProductList />
        <Modal isOpen={isOpen}>
          <ProductForm onClose={closeModal} />
        </Modal>
      </main>
    </div>
  );
};

export default ProductManage;
