import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../AllProduct/ProductCard";

const Kids = () => {
  const { product } = useSelector((s) => s.main);
  let filterCategory = product.filter((el) => el.category === "kids");

  return (
    <div className="my-[30px]">
      <div className="container">
        <div className="flex items-start flex-wrap gap-[40px]">
          {filterCategory.map((el) => (
            <ProductCard el={el} key={el.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Kids;
