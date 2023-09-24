import React from "react";
import { IProduct } from "../../types/Product";
import { FaEdit, FaTrash } from "react-icons/fa";

interface IProductItemProps {
  product: IProduct;
}
const ProductItem: React.FC<IProductItemProps> = ({
  product,
}: IProductItemProps) => {
  return (
    <tr>
      <td className="px-4 py-2 text-center">{product.productName}</td>
      <td className="px-4 py-2 text-center">
        <div className="flex justify-center items-center">
          <img
            src={product.productImage}
            alt="Hình ảnh"
            className="w-10 h-10 rounded-sm"
          />
        </div>
      </td>
      <td className="px-4 py-2 text-center">{product.productPrice}</td>
      <td className="px-4 py-2 text-center">{product.productCategory}</td>
      <td className="px-4 py-2 text-center">{product.productQuantity}</td>

      <td>
        {" "}
        <div className="flex space-x-4 justify-center">
          <button
            // onClick={onEditClick}
            className="p-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white"
          >
            <FaEdit />
          </button>
          <button
            // onClick={onDeleteClick}
            className="p-2 rounded-full bg-red-500 hover:bg-red-600 text-white"
          >
            <FaTrash />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ProductItem;
