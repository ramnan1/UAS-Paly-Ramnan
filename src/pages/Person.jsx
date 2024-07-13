import React from "react";
import products from "../product.json";
import ProductCard from "../components/ProductCard";

const Person = () => {
  const techStore = products.filter((value) => value.shop.name == "Tech Store");
  const keybordWorld = products.filter(
    (value) => value.shop.name == "Keyboard World"
  );
  const soundHub = products.filter((value) => value.shop.name == "Sound Hub");
  const accessoryDepot = products.filter(
    (value) => value.shop.name == "Accessory Depot"
  );
  const gamers = products.filter(
    (value) => value.shop.name == "Gamer's Paradise"
  );
  const watchStore = products.filter(
    (value) => value.shop.name == "Watch Store"
  );
  const storageSolution = products.filter(
    (value) => value.shop.name == "Storage Solutions"
  );
  const cameraWorld = products.filter(
    (value) => value.shop.name == "Camera World"
  );
  return (
    <>
      <h1 className="text-3xl font-bold my-10 mt-20">Tech Store</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {techStore.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <h1 className="text-3xl font-bold my-10">Keybord World</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {keybordWorld.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <h1 className="text-3xl font-bold my-10">Sound Hub</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {soundHub.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {accessoryDepot.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <h1 className="text-3xl font-bold my-10">Gamer`s Paradise</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {gamers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <h1 className="text-3xl font-bold my-10">Watch Store</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {watchStore.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <h1 className="text-3xl font-bold my-10">Storage Solutions</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {storageSolution.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <h1 className="text-3xl font-bold my-10">Camera World</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cameraWorld.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Person;
