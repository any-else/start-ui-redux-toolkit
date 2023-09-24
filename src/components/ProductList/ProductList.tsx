import React from "react";
import { IProduct } from "../../types/Product";
import ProductItem from "../ProductItem/ProductItem";
const productData: IProduct[] = [
  {
    productName: "Đồng Hồ Điện Tử Đa Năng",
    productImage:
      "https://down-vn.img.susercontent.com/file/sg-11134201-7qvg9-lg3i51kfwxvl7b",
    productPrice: "5.000.000 VND",
    productCategory: "Điện tử",
    productQuantity: 100,
  },
  {
    productName: "Đèn led gắn bánh xe ô tô",
    productImage:
      "https://down-vn.img.susercontent.com/file/sg-11134201-22120-fxijk5dd0qkve5",

    productPrice: "3.000.000 VND",
    productCategory: "Điện tử",
    productQuantity: 100,
  },
];
const ProductList: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Danh sách sản phẩm</h1>
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2 bg-gray-300">Tên sản phẩm</th>
            <th className="px-4 py-2 bg-gray-300">Ảnh sản phẩm</th>
            <th className="px-4 py-2 bg-gray-300">Giá sản phẩm</th>
            <th className="px-4 py-2 bg-gray-300">Thể loại</th>
            <th className="px-4 py-2 bg-gray-300">Số lượng</th>
            <th className="px-4 py-2 bg-gray-300">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {productData &&
            productData.map((product, index) => (
              <ProductItem key={index} product={product} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
