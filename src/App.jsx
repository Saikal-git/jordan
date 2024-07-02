import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Man from "./components/Man";
import Woman from "./components/Woman";
import Kids from "./components/Kids";
import Sale from "./components/Sale";
import CreateProduct from "./components/CreateProduct";
import AllProduct from "./components/AllProduct";
import Search from "./components/Search";
import Basket from "./components/Basket";
import { useSelector } from "react-redux";

const App = () => {
  const { dark, light } = useSelector((s) => s.main);

  return (
    <div
      style={{
        background: dark ? "black" : "white",
        height: "100%",
        minHeight: "110vh",
      }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/man" element={<Man />} />
        <Route path="/woman" element={<Woman />} />
        <Route path="/kids/" element={<Kids />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/search" element={<Search />} />
        <Route path="/create" element={<CreateProduct />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/allProduct" element={<AllProduct />} />
      </Routes>
    </div>
  );
};

export default App;
