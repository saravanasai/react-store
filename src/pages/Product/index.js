import React from "react";
import ProductCard from "../../components/ProductCard";

const Product = () => {
  const products = [
    { id: 1, product_name: "Jacket Rider", price: "450" },
    { id: 2, product_name: "Helmet", price: "50" },
    { id: 3, product_name: "Handle Bar", price: "150" },
    { id: 4, product_name: "Handle Bar", price: "150" },
    { id: 5, product_name: "Handle Bar", price: "150" },
  ];

  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
        {products.map(({ id, product_name, price }) => {
          return (
            <ProductCard key={id} productName={product_name} price={price} />
          );
        })}
      </div>
    </>
  );
};

export default Product;
