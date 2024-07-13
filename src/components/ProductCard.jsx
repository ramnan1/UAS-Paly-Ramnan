import React from "react";
import { useOutletContext } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { setProducts } = useOutletContext();
  const addProduct = () => {
    let storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    // Cari apakah produk sudah ada di localStorage
    const existingProduct = storedProducts.find(
      (storedProduct) => storedProduct.id === product.id
    );

    if (existingProduct) {
      // Jika produk sudah ada, tambahkan qty-nya
      const updatedProducts = storedProducts.map((storedProduct) =>
        storedProduct.id === product.id
          ? { ...storedProduct, qty: storedProduct.qty + 1 }
          : storedProduct
      );
      localStorage.setItem("products", JSON.stringify(updatedProducts));
    } else {
      // Jika produk belum ada, tambahkan dengan qty 1
      const updatedProducts = [
        ...storedProducts,
        { ...product, checked: true, qty: 1 },
      ];
      localStorage.setItem("products", JSON.stringify(updatedProducts));
      setProducts(updatedProducts);
    }

    alert("Produk berhasil ditambahkan ke keranjang.");
  };

  const discount = product.price * (product.discount_percentage / 100);

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img
        src={product.images[0]}
        alt={product.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.title}</h3>
        <p className="text-sm text-gray-600">{product.description}</p>
        <div className="flex items-center gap-5">
          <p className="text-lg font-bold line-through text-gray-400">
            ${product.price}
          </p>
          <p className="text-lg font-bold ">
            ${(product.price - discount).toFixed(2)}
          </p>
        </div>
        <p className="text-sm text-red-500">
          Discount: {product.discount_percentage}%
        </p>
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">Shop: {product.shop.name}</p>
          <button
            onClick={addProduct}
            className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
