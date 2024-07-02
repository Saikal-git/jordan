import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../../redux/CreateProductSlice";

const CreateProduct = () => {
  const [productUrl, setProductUrl] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDes, setProductDes] = useState("");
  const [productCategory, setProductCategory] = useState("");

  const { product, dark } = useSelector((s) => s.main);
  console.log(product, "pro");
  const dispatch = useDispatch();

  const randomRating = () => {
    return Math.floor(Math.random() * 6);
  };

  const addProduct = () => {
    if (
      productUrl.trim() === "" ||
      productName.trim() === "" ||
      productPrice.trim() === "" ||
      productDes.trim() === "" ||
      productCategory.trim() === ""
    ) {
      alert(404);
    } else {
      const newProduct = {
        id: product.length ? product[product.length - 1].id + 1 : 1,
        quantity: 1,

        url: productUrl,
        name: productName,
        price: productPrice,
        description: productDes,
        rating: randomRating(),
        category: productCategory,
      };
      setProductUrl("");
      setProductName("");
      setProductPrice("");
      setProductDes("");
      return dispatch(createProduct(newProduct));
    }
  };

  return (
    <div className="my-[40px]">
      <div className="container">
        <div className="w-[50%] mx-auto flex items-center justify-center flex-col gap-6 my-[30px]">
          <div className="relative z-0 w-full mb-5 group">
            <input
              onChange={(e) => setProductUrl(e.target.value)}
              value={productUrl}
              type="text"
              name="repeat_password"
              id="floating_repeat_password"
              className={`block py-2.5 px-0 w-full text-2xl ${
                dark ? "text-white " : "text-black"
              } bg-transparent appearance-none border-0 ${
                dark
                  ? "border-b-2 border-gray-300   dark:text-white dark:border-white dark:focus:border-white focus:border-white peer"
                  : "border-b-2 border-black   dark:text-black dark:border-black dark:focus:border-black focus:border-black peer"
              }  focus:outline-none focus:ring-0`}
              placeholder=" "
            />
            <label
              htmlFor="floating_repeat_password"
              className={`peer-focus:font-medium absolute text-2xl duration-300 transhtmlform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 ${
                dark
                  ? " peer-focus:text-white peer-focus:dark:text-white  text-gray-500 dark:text-gray-400"
                  : " peer-focus:text-black peer-focus:dark:text-black  text-black dark:text-black"
              } peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
            >
              Product Url(...)
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              onChange={(e) => setProductName(e.target.value)}
              value={productName}
              type="text"
              name="repeat_password"
              id="floating_repeat_password"
              className={`block py-2.5 px-0 w-full text-2xl ${
                dark ? "text-white " : "text-black"
              } bg-transparent appearance-none border-0 ${
                dark
                  ? "border-b-2 border-gray-300   dark:text-white dark:border-white dark:focus:border-white focus:border-white peer"
                  : "border-b-2 border-black   dark:text-black dark:border-black dark:focus:border-black focus:border-black peer"
              }  focus:outline-none focus:ring-0`}
              placeholder=" "
            />
            <label
              htmlFor="floating_repeat_password"
              className={`peer-focus:font-medium absolute text-2xl duration-300 transhtmlform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 ${
                dark
                  ? " peer-focus:text-white peer-focus:dark:text-white  text-gray-500 dark:text-gray-400"
                  : " peer-focus:text-black peer-focus:dark:text-black  text-black dark:text-black"
              } peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
            >
              Product Name
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              onChange={(e) => setProductPrice(e.target.value)}
              value={productPrice}
              type="text"
              name="repeat_password"
              id="floating_repeat_password"
              className={`block py-2.5 px-0 w-full text-2xl ${
                dark ? "text-white " : "text-black"
              } bg-transparent appearance-none border-0 ${
                dark
                  ? "border-b-2 border-gray-300   dark:text-white dark:border-white dark:focus:border-white focus:border-white peer"
                  : "border-b-2 border-black   dark:text-black dark:border-black dark:focus:border-black focus:border-black peer"
              }  focus:outline-none focus:ring-0`}
              placeholder=" "
            />
            <label
              htmlFor="floating_repeat_password"
              className={`peer-focus:font-medium absolute text-2xl duration-300 transhtmlform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 ${
                dark
                  ? " peer-focus:text-white peer-focus:dark:text-white  text-gray-500 dark:text-gray-400"
                  : " peer-focus:text-black peer-focus:dark:text-black  text-black dark:text-black"
              } peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
            >
              Product Price
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              onChange={(e) => setProductDes(e.target.value)}
              value={productDes}
              type="text"
              name="repeat_password"
              id="floating_repeat_password"
              className={`block py-2.5 px-0 w-full text-2xl ${
                dark ? "text-white " : "text-black"
              } bg-transparent appearance-none border-0 ${
                dark
                  ? "border-b-2 border-gray-300   dark:text-white dark:border-white dark:focus:border-white focus:border-white peer"
                  : "border-b-2 border-black   dark:text-black dark:border-black dark:focus:border-black focus:border-black peer"
              }  focus:outline-none focus:ring-0`}
              placeholder=" "
            />
            <label
              htmlFor="floating_repeat_password"
              className={`peer-focus:font-medium absolute text-2xl duration-300 transhtmlform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 ${
                dark
                  ? " peer-focus:text-white peer-focus:dark:text-white  text-gray-500 dark:text-gray-400"
                  : " peer-focus:text-black peer-focus:dark:text-black  text-black dark:text-black"
              } peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
            >
              Product Description
            </label>
          </div>
          <select
            onChange={(e) => setProductCategory(e.target.value)}
            value={productCategory}
            className={` text-2xl py-[10px] px-[10px] w-full ${
              dark
                ? "  bg-black border-2 border-solid border-white text-white"
                : "bg-white border-2 border-solid border-black text-black"
            }`}
          >
            <option value="man">Man</option>
            <option value="woman">Woman</option>
            <option value="kids">Kids</option>
          </select>
          <button
            onClick={() => addProduct()}
            className="text-black font-bold bg-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-2xl w-full sm:w-auto px-5 py-2.5 text-center dark:bg-white dark:hover:bg-white dark:focus:ring-white"
            style={{
              background: dark ? "white" : "black",
              color: dark ? "black" : "white",
            }}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
