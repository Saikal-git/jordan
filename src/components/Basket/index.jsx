import React from "react";
import { useDispatch, useSelector } from "react-redux";
import empty from "../../assets/empty_cart.png";
import {
  deleteBasket,
  dicrementQuantity,
  incrementQuantity,
  removeall,
} from "../../redux/basketProductSlice";
import CountUp from "react-countup";

const Basket = () => {
  const { basket } = useSelector((s) => s.basket);
  console.log(basket, "bas");
  const dispatch = useDispatch();
  const { theme } = useSelector((s) => s.main);

  const totalPrice = basket.reduce((acc, el) => {
    return acc + +el.price * el.quantity;
  }, 0);

  return (
    <div className="my-[50px]">
      <div className="container">
        {basket.length ? (
          <div className="">
            <div class="box relative overflow-x-auto shadow-md sm:rounded-lg">
              <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-1.5xl text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="px-16 py-3">
                      <span class="">Image</span>
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Product
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Quantity
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {basket.map((el) => (
                    <tr class="bg-gray-100 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td class="px-4 py-3">
                        <img
                          src={el.url}
                          class="w-16 md:w-32 max-w-full max-h-full"
                          alt="Apple Watch"
                        />
                      </td>
                      <td class="px-6 py-4 text-[18px] font-semibold text-gray-900 dark:text-white">
                        {el.name}
                      </td>
                      <td class="px-6 py-4">
                        <div class="flex items-center">
                          <button
                            onClick={() => dispatch(dicrementQuantity(el.id))}
                            class="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                            type="button"
                          >
                            <span class="sr-only">Quantity button</span>
                            <svg
                              class="w-3 h-3"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 18 2"
                            >
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M1 1h16"
                              />
                            </svg>
                          </button>
                          <div>
                            <input
                              type="number"
                              value={el.quantity}
                              className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                          </div>
                          <button
                            onClick={() => dispatch(incrementQuantity(el.id))}
                            class="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                            type="button"
                          >
                            <span class="sr-only">Quantity button</span>
                            <svg
                              class="w-3 h-3"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 18 18"
                            >
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M9 1v16M1 9h16"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                      <td class="px-6 py-4 text-[18px]  font-semibold text-gray-900 dark:text-white">
                        {/* {el.price * el.quantity} c */}
                        <div className="flex relative">
                          <h2
                            className={`text-1xl font-bold ${
                              el.price > 3000 ? "text-red-600" : "text-black"
                            }`}
                          >
                            {el.price > 3000
                              ? Math.floor(el.price - (el.price / 100) * 20) *
                                el.quantity
                              : el.price * el.quantity}
                            c
                          </h2>
                        </div>
                      </td>
                      <td class="px-6 py-4">
                        <a
                          onClick={() => dispatch(deleteBasket(el.id))}
                          class="font-bold text-[20px]  text-red-600 dark:text-red-500 hover:underline"
                        >
                          Remove
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex items-center justify-between">
              <h1
                className={`text-[30px] ${theme ? "text-white" : "text-black"}`}
              >
                Total Price:
                <CountUp
                  start={0}
                  end={totalPrice}
                  duration={1}
                  separator=" "
                ></CountUp>
                c
              </h1>
              <button
                onClick={() => dispatch(removeall())}
                type="button"
                className="text-white mx-auto  ml-[650px] mt-[30px] bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Remove All
              </button>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center w-[40%] mx-auto">
            <img src={empty} alt="" className="w-[100%]" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Basket;
