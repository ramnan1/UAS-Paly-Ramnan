import React, { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import ModalComponent from "./ModalComponent";
import { Label, TextInput } from "flowbite-react";

const ProductCart = ({
  product,
  increaseQuantity,
  decreaseQuantity,
  removeProduct,
  onChangeChecked,
}) => {
  const discount = product.price * (product.discount_percentage / 100);
  return (
    <>
      <div className="px-5 flex bg-white rounded-md flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 py-6 border-gray-200 group">
        <input
          type="checkbox"
          checked={product.checked}
          className=""
          onChange={onChangeChecked}
        />
        <div className="w-full md:max-w-[126px]">
          <img
            src={product.images[0]}
            alt="product image"
            className="mx-auto"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 w-full">
          <div className="col-span-2">
            <div className="flex flex-col max-[500px]:items-center gap-3">
              <h6 className="font-semibold text-base leading-7 text-black">
                {product.title}
              </h6>
              <h6 className="font-medium text-xs leading-4 text-gray-400 transition-all duration-300 group-hover:text-indigo-600">
                {product.description}
              </h6>
            </div>
          </div>
          <div className="flex col-span-2 items-end md:justify-end max-md:mt-3 h-full gap-2">
            <p className="font-bold text-lg leading-8 text-gray-600 items-end  text-right">
              <ModalComponent />
            </p>
            <p
              className="font-bold text-lg leading-4 mb-0.5 text-gray-600 items-end cursor-pointer text-right me-5"
              onClick={removeProduct}>
              <FaRegTrashAlt className="text-xl" />
            </p>
          </div>
          <div className=" items-end md:justify-end max-md:mt-3 h-full ">
            <p className="font-bold line-through text-base  text-gray-400 text-center text-right">
              ${product.price}
            </p>
            <p className="font-bold text-lg leading-8 text-gray-600 text-center transition-all duration-300 group-hover:text-indigo-600 text-right">
              ${(product.price - discount).toFixed(2)}
            </p>
            <div className="flex items-end justify-end ">
              <button
                className="group rounded-l-xl px-1 py-[3px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300"
                onClick={decreaseQuantity}>
                <svg
                  className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none">
                  <path
                    d="M16.5 11H5.5"
                    stroke=""
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M16.5 11H5.5"
                    stroke=""
                    strokeOpacity="0.2"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M16.5 11H5.5"
                    stroke=""
                    strokeOpacity="0.2"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              <input
                type="text"
                className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[57px] min-w-[45px] placeholder:text-gray-900  text-center bg-transparent"
                style={{ height: "30px" }}
                value={product.qty}
                readOnly
              />
              <button
                className="group rounded-r-xl px-1 py-[3px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300"
                onClick={increaseQuantity}>
                <svg
                  className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none">
                  <path
                    d="M11 5.5V16.5M16.5 11H5.5"
                    stroke=""
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M11 5.5V16.5M16.5 11H5.5"
                    stroke=""
                    strokeOpacity="0.2"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M11 5.5V16.5M16.5 11H5.5"
                    stroke=""
                    strokeOpacity="0.2"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCart;
