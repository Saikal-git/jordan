import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../AllProduct/ProductCard";

const Sale = () => {
  const { product } = useSelector((s) => s.main);
  return (
    <div className="my-[30px]">
      <div className="container">
        <div className="flex items-start flex-wrap gap-[40px]">
          {product.map((el) =>
            el.price > 3000 ? <ProductCard el={el} key={el.id} /> : null
          )}
        </div>
      </div>
    </div>
  );
};

export default Sale;
