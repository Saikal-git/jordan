// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { IoMdCloseCircleOutline } from "react-icons/io";
// import { productDelete } from "../../redux/CreateProductSlice";
// import { basketProduct } from "../../redux/basketProductSlice";
// import { useNavigate } from "react-router-dom";

// const arrNumbers = [1, 2, 3, 4, 5];

// const AllProduct = () => {
//   const { product } = useSelector((s) => s.main);
//   const { basket } = useSelector((s) => s.basket);
//   const dispatch = useDispatch();
//   const nav = useNavigate();

//   return (
//     <div className="my-[30px]">
//       <div className="container">
//         <div className="flex items-start flex-wrap gap-[30px]">
//           {product.map((el) => (
//             <div
//               className="relative w-[400px] h-[600px] flex items-center justify-center flex-col gap-7 p-[18px] bg-white rounded-sm"
//               key={el.id}
//             >
//               <a
//                 onClick={() => dispatch(productDelete(el))}
//                 className="absolute cursor-pointer top-[15px] right-[15px] text-black text-3xl"
//               >
//                 <IoMdCloseCircleOutline />
//               </a>
//               <img src={el.url} alt="img" width={280} />
//               <h1 className="text-black text-[20px] font-bold text-center">
//                 {el.name}
//               </h1>
//               <p className="text-black">{el.category}</p>

//               <div className="flex items-center space-x-1 rtl:space-x-reverse">
//                 {arrNumbers.map((number) => (
//                   <div
//                     key={number}
//                     className="star"
//                     style={{
//                       background: number <= el.rating ? "orange" : "gray",
//                     }}
//                   ></div>
//                 ))}
//               </div>

//               <div className="flex items-center justify-around w-full">
//                 <h1 className="text-black font-medium text-[25px]">
//                   {el.price} с
//                 </h1>
//                 <button
//                   onClick={() =>
//                     someBas ? nav(`/basket`) : dispatch(basketProduct(el))
//                   }
//                   className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-1xl px-7 py-2 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
//                 >
//                   {someBas ? "Go to bas" : " Buy"}
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AllProduct;

import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

const AllProduct = () => {
  const { product } = useSelector((s) => s.main);

  return (
    <div className="my-[30px]">
      <div className="container">
        <div className="flex items-start flex-wrap gap-[30px]">
          {product.map((el) => (
            <ProductCard el={el} key={el.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
