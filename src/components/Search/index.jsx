import React from "react";
import { useSelector } from "react-redux";

const Search = () => {
  const { search } = useSelector((s) => s.main);
  const arrNumbers = [1, 2, 3, 4, 5];

  return (
    <div className="">
      <div className="container">
        <div className="">
          {search.map((el) => (
            <div
              className="relative w-[400px] h-[600px] flex items-center justify-center flex-col gap-7 p-[18px] bg-white rounded-sm"
              key={el.id}
            >
              <img src={el.url} alt="img" width={280} />
              <h1 className="text-black text-[20px] font-bold text-center">
                {el.name}
              </h1>
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
                <h1 className="text-black font-medium text-[25px]">
                  {el.price} с
                </h1>
                <button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-1xl px-7 py-2 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                  Buy
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
