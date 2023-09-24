import React, { useState } from "react";
import numeral from "numeral";
import { IProduct } from "../../types/Product";
interface IProductFormProps {
  onClose: () => void;
}

const initState: IProduct = {
  id: null,
  productName: "",
  productPrice: "",
  productCategory: "",
  productImage: "",
  productQuantity: 0,
};

const ProductForm: React.FC<IProductFormProps> = ({
  onClose,
}: IProductFormProps) => {
  const [product, setProduct] = useState<IProduct>(initState);

  const onChangeProduct = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: name == "productPrice" ? value.toLocaleString() : value,
    });
  };
  const onChangePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const numericValue = parseFloat(inputValue.replace(/[^0-9]/g, ""));

    if (!isNaN(numericValue)) {
      const formattedValue = numeral(numericValue).format("0,0") + " VND";
      setProduct({ ...product, productPrice: formattedValue });
    } else {
      setProduct({ ...product, productPrice: "" });
    }
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Tạo mới sản phẩm</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="productName" className="block font-medium">
            Tên sản phẩm:
          </label>
          <input
            type="text"
            id="productName"
            name="productName"
            className="w-full p-2 border rounded"
            value={product.productName}
            onChange={onChangeProduct}
            required
          />
        </div>
        <div>
          <label htmlFor="productImage" className="block font-medium">
            Ảnh sản phẩm:
          </label>
          <input
            type="text"
            id="productImage"
            name="productImage"
            className="w-full p-2 border rounded"
            value={product.productImage}
            onChange={onChangeProduct}
            required
          />
        </div>
        <div>
          <label htmlFor="productPrice" className="block font-medium">
            Giá sản phẩm:
          </label>
          <input
            type="text"
            id="productPrice"
            name="productPrice"
            className="w-full p-2 border rounded"
            value={product.productPrice}
            onChange={onChangePrice}
            required
          />
        </div>
        <div>
          <label htmlFor="productCategory" className="block font-medium">
            Thể loại sản phẩm:
          </label>
          <input
            type="text"
            id="productCategory"
            name="productCategory"
            className="w-full p-2 border rounded"
            value={product.productCategory}
            onChange={onChangeProduct}
            required
          />
        </div>
        <div>
          <label htmlFor="productQuantity" className="block font-medium">
            Số Lượng sản phẩm:
          </label>
          <input
            type="text"
            id="productQuantity"
            name="productQuantity"
            className="w-full p-2 border rounded"
            value={product.productQuantity}
            onChange={onChangeProduct}
            required
          />
        </div>
        <div className="flex gap-3">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:scale-95 transition ease-out duration-300"
          >
            Lưu sản phẩm
          </button>
          <button
            type="submit"
            className="bg-red-500 text-white py-2 px-4 rounded hover:scale-95 transition ease-out duration-300"
            onClick={onClose}
          >
            Huỷ
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
