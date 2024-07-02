import React, { useState } from "react";
import logo from "../../assets/logos.png";
import jordan from "../../assets/jordan.png";
import nike from "../../assets/nike.png";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { PiShoppingCartBold } from "react-icons/pi";
import { IoMdSearch } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
  darkMode,
  lightMode,
  productSearch,
} from "../../redux/CreateProductSlice";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Header = () => {
  const [hidenInput, setHidenInput] = useState(false);
  const [searchProduct, setsearchproduct] = useState("");
  const { dark, light } = useSelector((s) => s.main);
  const dispatch = useDispatch();
  const nav = useNavigate();
  return (
    <div className="py-[30px]">
      <div className="container">
        <div className="flex items-center justify-between">
          {dark ? (
            <img src={logo} alt="img" />
          ) : (
            <div className="flex items-center gap-3">
              <img src={jordan} alt="" width={70} />
              <img src={nike} alt="" width={90} />
            </div>
          )}
          <div
            className="flex items-center gap-10"
            style={{
              color: dark ? "white" : "black",
            }}
          >
            <Link to={`/`} className="text-2xl font-black">
              HOME
            </Link>
            <Link to={`/man`} className="text-2xl font-black">
              MAN
            </Link>
            <Link to={`/woman`} className="text-2xl font-black">
              WOMAN
            </Link>
            <Link to={`/kids`} className="text-2xl font-black">
              KIDS
            </Link>
            <Link to={`/sale`} className="text-2xl font-black">
              SALE
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center relative">
              <input
                type="text"
                onChange={(e) => setsearchproduct(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    dispatch(productSearch(searchProduct));
                    nav(`/search`);
                    setsearchproduct("");
                  }
                }}
                value={searchProduct}
                className="text-2xl z-[3] w-[240px] bg-transparent border-2 border-solid border-white text-white rounded-[10px]"
                placeholder="  search"
                style={{
                  position: "absolute",
                  right: hidenInput ? "-5px" : "0",
                  transition: "1s",
                  opacity: hidenInput ? "1" : "0",
                  border: dark ? "2px solid white" : "2px solid black",
                }}
              />
              <a
                className="text-[30px] z-[6] text-white cursor-pointer"
                onClick={() => setHidenInput(!hidenInput)}
                style={{
                  color: dark ? "white" : "black",
                }}
              >
                <IoMdSearch />
              </a>
            </div>
            <a
              onClick={() => nav(`/basket`)}
              className="text-[30px] z-[6] text-white"
              style={{
                color: dark ? "white" : "black",
              }}
            >
              <PiShoppingCartBold />
            </a>
            <div className="flex gap-[1px]">
              <button
                onClick={() => {
                  dispatch(darkMode());
                }}
                style={{
                  background: dark ? "white" : "black",
                  color: dark ? "black" : "white",
                }}
                className="flex flex-col items-center justify-center text-[20px] bg-white border-2px border-solid border-black w-[35px] h-[35px] rounded-tl-[30px] rounded-bl-[30px] text-black"
              >
                <MdDarkMode />
              </button>
              <button
                onClick={() => {
                  dispatch(lightMode());
                  darkMode(false);
                }}
                style={{
                  background: light ? "black" : "white",
                  color: light ? "white" : "black",
                }}
                className="flex items-center justify-center text-[20px] bg-white border-2px border-solid border-black w-[40px] h-[35px] rounded-tr-[35px] rounded-br-[30px] text-black"
              >
                <MdLightMode />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
