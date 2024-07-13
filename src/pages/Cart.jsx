// import React, { useState, useEffect } from "react";
import { Button } from "flowbite-react";
import ProductCart from "../components/ProductCart";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

const Cart = () => {
  const { products, setProducts } = useOutletContext();
  // const [products, setProducts] = useState([]);
  const temp = products?.filter((product) => product.checked == true) || 0;
  const [checked, setChecked] = useState(temp);
  const price = checked.reduce(
    (sum, product) => sum + product.price * product.qty,
    0
  );
  const discount = checked.reduce(
    (sum, product) =>
      sum + (product.discount_percentage / 100) * product.price * product.qty,
    0
  );
  const totalPrice = price - discount;

  const [storeChecked, setStoreChecked] = useState({
    techStore: true,
    keyboardWorld: true,
    soundHub: true,
    accessoryDepot: true,
    gamers: true,
    watchStore: true,
    storageSolution: true,
    cameraWorld: true,
  });
  const [allChecked, setAllChecked] = useState(true);

  const changeAllChecked = () => {
    const updatedProducts = products.map((product) => ({
      ...product,
      checked: !allChecked,
    }));
    updateProductsInLocalStorage(updatedProducts);
    setAllChecked(!allChecked);
  };

  const changeTokoChecked = (shop) => {
    const updatedProducts = products.map((product) =>
      product.shop.name.replace(/\s/g, "").toLowerCase() == shop.toLowerCase()
        ? { ...product, checked: !storeChecked[shop] }
        : product
    );
    updateProductsInLocalStorage(updatedProducts);
    setStoreChecked((prev) => ({
      ...prev,
      [shop]: !storeChecked[shop],
    }));
  };

  const changeChecked = (productId) => {
    const updatedProducts = products.map((product) =>
      product.id === productId
        ? { ...product, checked: !product.checked }
        : product
    );
    updateProductsInLocalStorage(updatedProducts);
  };

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);

  useEffect(() => {
    const temp = products?.filter((product) => product.checked == true);
    setChecked(temp);
  }, [products]);

  const updateProductsInLocalStorage = (updatedProducts) => {
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    setProducts(updatedProducts);
  };

  const increaseQuantity = (productId) => {
    const updatedProducts = products.map((product) =>
      product.id === productId ? { ...product, qty: product.qty + 1 } : product
    );
    updateProductsInLocalStorage(updatedProducts);
  };

  const removeProduct = (productId) => {
    const updatedProducts = products.filter(
      (product) => product.id !== productId
    );
    updateProductsInLocalStorage(updatedProducts);
  };

  const decreaseQuantity = (productId) => {
    const existingProduct = products.find(
      (product) => product.id === productId
    );
    if (existingProduct.qty > 1) {
      const updatedProducts = products.map((product) =>
        product.id === productId
          ? { ...product, qty: product.qty - 1 }
          : product
      );
      updateProductsInLocalStorage(updatedProducts);
    } else {
      {
        alert("yakin");
        removeProduct(productId);
      }
    }
  };

  const removeAllProduct = () => {
    const updatedProducts = products.filter(
      (product) => product.checked === false
    );
    updateProductsInLocalStorage(updatedProducts);
  };

  const techStore = products?.filter(
    (value) => value.shop.name === "Tech Store"
  );
  const keyboardWorld = products?.filter(
    (value) => value.shop.name === "Keyboard World"
  );
  const soundHub = products?.filter((value) => value.shop.name === "Sound Hub");
  const accessoryDepot = products?.filter(
    (value) => value.shop.name === "Accessory Depot"
  );
  const gamers = products?.filter(
    (value) => value.shop.name === "Gamer's Paradise"
  );
  const watchStore = products?.filter(
    (value) => value.shop.name === "Watch Store"
  );
  const storageSolution = products?.filter(
    (value) => value.shop.name === "Storage Solutions"
  );
  const cameraWorld = products?.filter(
    (value) => value.shop.name === "Camera World"
  );

  return (
    <section>
      <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto relative z-10">
        <div className="grid grid-cols-12">
          <div className="col-span-12 xl:col-span-8 lg:pr-8 pt-14 pb-8 lg:py-24 w-full max-xl:max-w-3xl max-xl:mx-auto">
            <div className="flex items-center justify-between pb-8 border-b border-gray-300">
              <h2 className="font-manrope font-bold text-3xl leading-10 text-black">
                Shopping Cart
              </h2>
              <h2 className="font-manrope font-bold text-xl leading-8 text-gray-600">
                Items
              </h2>
            </div>
            <div className="flex mb-5 justify-between py-5 px-5 bg-white rounded-md flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 border-gray-200 group">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={allChecked}
                  onChange={changeAllChecked}
                />
                <h1 className="text-lg font-bold ms-4">
                  Pilih Semua({checked.length ?? 0})
                </h1>
              </div>
              <Button onClick={removeAllProduct}>Hapus</Button>
            </div>

            {techStore.length > 0 && (
              <>
                <div className="flex pt-5 px-5 bg-white rounded-md flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 border-gray-200 group">
                  <input
                    type="checkbox"
                    checked={storeChecked["techStore"]}
                    onChange={() => changeTokoChecked("techStore")}
                  />
                  <h1 className="text-lg font-bold">
                    {techStore[0].shop.name}
                  </h1>
                </div>
                {techStore.map((product) => (
                  <ProductCart
                    product={product}
                    key={product.id}
                    decreaseQuantity={() => decreaseQuantity(product.id)}
                    increaseQuantity={() => increaseQuantity(product.id)}
                    removeProduct={() => removeProduct(product.id)}
                    onChangeChecked={() => changeChecked(product.id)}
                  />
                ))}
              </>
            )}

            {keyboardWorld.length > 0 && (
              <>
                <div className="mt-5 flex pt-5 px-5 bg-white rounded-md flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 border-gray-200 group">
                  <input
                    type="checkbox"
                    checked={storeChecked["keyboardWorld"]}
                    onChange={() => changeTokoChecked("keyboardWorld")}
                  />
                  <h1 className="text-lg font-bold">
                    {keyboardWorld[0].shop.name}
                  </h1>
                </div>
                {keyboardWorld.map((product) => (
                  <ProductCart
                    product={product}
                    key={product.id}
                    decreaseQuantity={() => decreaseQuantity(product.id)}
                    increaseQuantity={() => increaseQuantity(product.id)}
                    removeProduct={() => removeProduct(product.id)}
                    onChangeChecked={() => changeChecked(product.id)}
                  />
                ))}
              </>
            )}
            {soundHub.length > 0 && (
              <>
                <div className="mt-5 flex pt-5 px-5 bg-white rounded-md flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 border-gray-200 group">
                  <input
                    type="checkbox"
                    checked={storeChecked["soundHub"]}
                    onChange={() => changeTokoChecked("soundHub")}
                  />
                  <h1 className="text-lg font-bold">{soundHub[0].shop.name}</h1>
                </div>
                {soundHub.map((product) => (
                  <ProductCart
                    product={product}
                    key={product.id}
                    decreaseQuantity={() => decreaseQuantity(product.id)}
                    increaseQuantity={() => increaseQuantity(product.id)}
                    removeProduct={() => removeProduct(product.id)}
                    onChangeChecked={() => changeChecked(product.id)}
                  />
                ))}
              </>
            )}
            {accessoryDepot.length > 0 && (
              <>
                <div className="mt-5 flex pt-5 px-5 bg-white rounded-md flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 border-gray-200 group">
                  <input
                    type="checkbox"
                    checked={storeChecked["accessoryDepot"]}
                    onChange={() => changeTokoChecked("accessoryDepot")}
                  />
                  <h1 className="text-lg font-bold">
                    {accessoryDepot[0].shop.name}
                  </h1>
                </div>
                {accessoryDepot.map((product) => (
                  <ProductCart
                    product={product}
                    key={product.id}
                    decreaseQuantity={() => decreaseQuantity(product.id)}
                    increaseQuantity={() => increaseQuantity(product.id)}
                    removeProduct={() => removeProduct(product.id)}
                    onChangeChecked={() => changeChecked(product.id)}
                  />
                ))}
              </>
            )}
            {gamers.length > 0 && (
              <>
                <div className="mt-5 flex pt-5 px-5 bg-white rounded-md flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 border-gray-200 group">
                  <input
                    type="checkbox"
                    checked={storeChecked["gamers"]}
                    onChange={() => changeTokoChecked("gamers")}
                  />
                  <h1 className="text-lg font-bold">{gamers[0].shop.name}</h1>
                </div>
                {gamers.map((product) => (
                  <ProductCart
                    product={product}
                    key={product.id}
                    decreaseQuantity={() => decreaseQuantity(product.id)}
                    increaseQuantity={() => increaseQuantity(product.id)}
                    removeProduct={() => removeProduct(product.id)}
                    onChangeChecked={() => changeChecked(product.id)}
                  />
                ))}
              </>
            )}
            {watchStore.length > 0 && (
              <>
                <div className="mt-5 flex pt-5 px-5 bg-white rounded-md flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 border-gray-200 group">
                  <input
                    type="checkbox"
                    checked={storeChecked["watchStore"]}
                    onChange={() => changeTokoChecked("watchStore")}
                  />
                  <h1 className="text-lg font-bold">
                    {watchStore[0].shop.name}
                  </h1>
                </div>
                {watchStore.map((product) => (
                  <ProductCart
                    product={product}
                    key={product.id}
                    decreaseQuantity={() => decreaseQuantity(product.id)}
                    increaseQuantity={() => increaseQuantity(product.id)}
                    removeProduct={() => removeProduct(product.id)}
                    onChangeChecked={() => changeChecked(product.id)}
                  />
                ))}
              </>
            )}
            {storageSolution.length > 0 && (
              <>
                <div className="mt-5 flex pt-5 px-5 bg-white rounded-md flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 border-gray-200 group">
                  <input
                    type="checkbox"
                    checked={storeChecked["storageSolution"]}
                    onChange={() => changeTokoChecked("storageSolution")}
                  />
                  <h1 className="text-lg font-bold">
                    {storageSolution[0].shop.name}
                  </h1>
                </div>
                {storageSolution.map((product) => (
                  <ProductCart
                    product={product}
                    key={product.id}
                    decreaseQuantity={() => decreaseQuantity(product.id)}
                    increaseQuantity={() => increaseQuantity(product.id)}
                    removeProduct={() => removeProduct(product.id)}
                    onChangeChecked={() => changeChecked(product.id)}
                  />
                ))}
              </>
            )}
            {cameraWorld.length > 0 && (
              <>
                <div className="mt-5 flex pt-5 px-5 bg-white rounded-md flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 border-gray-200 group">
                  <input
                    type="checkbox"
                    checked={storeChecked["cameraWorld"]}
                    onChange={() => changeTokoChecked("cameraWorld")}
                  />
                  <h1 className="text-lg font-bold">
                    {cameraWorld[0].shop.name}
                  </h1>
                </div>
                {cameraWorld.map((product) => (
                  <ProductCart
                    product={product}
                    key={product.id}
                    decreaseQuantity={() => decreaseQuantity(product.id)}
                    increaseQuantity={() => increaseQuantity(product.id)}
                    removeProduct={() => removeProduct(product.id)}
                    onChangeChecked={() => changeChecked(product.id)}
                  />
                ))}
              </>
            )}

            {/* Continue with other stores */}
          </div>
          <div className="col-span-12 xl:col-span-4 w-full pt-7 xl:pt-24">
            <div className="max-xl:max-w-3xl max-xl:mx-auto max-xl:px-4 md:px-5 relative z-10 bg-gray-50 xl:h-screen px-5 lg:px-10 py-12">
              <div className="pb-9 border-b border-gray-300">
                <h3 className="font-bold text-3xl leading-10 text-black">
                  Cart Total
                </h3>
              </div>
              <ul className="pt-5 flex flex-col gap-5 text-lg font-medium leading-7 text-black">
                <li className="flex items-center justify-between">
                  Subtotal <span className="">${price.toFixed(2)}</span>
                </li>
                <li className="flex items-center justify-between">
                  Discount <span className="">${discount.toFixed(2)}</span>
                </li>
                <li className="flex items-center justify-between text-xl font-bold leading-8 text-green-600">
                  Total <span className="">${totalPrice.toFixed(2)}</span>
                </li>
              </ul>
              <button className="w-full h-[56px] mt-10 rounded-md bg-gray-900 text-lg font-bold leading-7 text-white transition-all duration-300 hover:bg-gray-700 focus:bg-gray-700">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
