import React, { useEffect, useState } from "react";
import { Button, DarkThemeToggle, Flowbite } from "flowbite-react";
import { Navbar } from "flowbite-react";
import { FaShoppingCart } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  const [products, setProducts] = useState([]);

  const handleProductsChange = (data) => {
    setProducts(data);
  };

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);
  return (
    <>
      <Navbar
        fluid
        className=" bg-slate-300 justify-start fixed top-0 right-0 left-0 z-20">
        <Navbar.Brand as={Link} to={"/"}>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white ">
            List Product
          </span>
        </Navbar.Brand>
        <Navbar.Toggle style={{ marginLeft: "auto", marginRight: "20px" }} />
        <Navbar.Collapse style={{ marginLeft: "auto", marginRight: "20px" }}>
          <Navbar.Link as={Link} to={"/cart"} className="relative">
            <FaShoppingCart className="dark:text-white text-xl" />
            <div className="absolute inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
              {products.length}
            </div>
          </Navbar.Link>
        </Navbar.Collapse>
        <Flowbite theme={{ mode: "auto" }}>
          <DarkThemeToggle mode className=" border-none" />
        </Flowbite>
      </Navbar>
      <div className="container mx-auto ">
        <Outlet
          context={{ products: products, setProducts: handleProductsChange }}
        />
      </div>
    </>
  );
};

export default Layout;
