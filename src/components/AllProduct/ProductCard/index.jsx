import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { productDelete } from "../../../redux/CreateProductSlice";
import { basketProduct } from "../../../redux/basketProductSlice";
import { useNavigate } from "react-router-dom";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const ProductCard = ({ el }) => {
  const { basket } = useSelector((s) => s.basket);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const arrNumbers = [1, 2, 3, 4, 5];
  const someBas = basket.some((item) => item.id === el.id);

  return (
    <div>
      <div className="my-[30px]">
        <div
          className="box relative  w-[400px] h-[600px] flex items-center justify-center flex-col gap-7 p-[18px] bg-white rounded-sm"
          key={el.id}
        >
          <a
            onClick={() => dispatch(productDelete(el))}
            className="absolute cursor-pointer top-[15px] right-[15px] text-black text-3xl"
          >
            <IoMdCloseCircleOutline />
          </a>
          <Zoom>
            <img src={el.url} alt="img" width={280} />
          </Zoom>
          <h1 className="text-black text-[20px] font-bold text-center">
            {el.name}
          </h1>
          <p className="text-black">{el.category}</p>

          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            {arrNumbers.map((number) => (
              <div
                key={number}
                className="star"
                style={{
                  background: number <= el.rating ? "orange" : "gray",
                }}
              ></div>
            ))}
          </div>

          <div className="flex items-center justify-around w-full">
            <div className="flex relative">
              {el.price > 3000 ? (
                <h2 className="text-3xl font-bold  text-red-600 ">
                  {Math.floor(el.price - (el.price / 100) * 20)}{" "}
                </h2>
              ) : null}
              <h2
                className={`${
                  el.price > 3000 ? "text-1xl" : "text-3xl"
                } font-bold text-gray-900 dark:text-white ml-[20px] ${
                  el.price > 3000
                    ? "line-through absolute top-[-20px] right-[-50px]"
                    : null
                }`}
              >
                {Math.floor(el.price)}
              </h2>
            </div>
            <button
              onClick={() =>
                someBas ? nav(`/basket`) : dispatch(basketProduct(el))
              }
              className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-1xl px-7 py-2 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              {someBas ? "Go to basket" : "Buy"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
