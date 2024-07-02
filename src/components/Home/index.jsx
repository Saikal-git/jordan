import React from "react";
import bgHome from "../../assets/home-bg.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div
      className=""
      style={{
        background: `url(${bgHome}) no-repeat center/cover`,
        minHeight: "92vh",
      }}
    >
      <div className="container">
        <div className="">
          <div className="fixed bottom-[50px] flex items-center gap-5 left-[34%]">
            <button
              onClick={() => navigate(`/create`)}
              className="text-2xl font-bold w-[220px] h-[60px] bg-white text-black"
            >
              ADD TO CARD
            </button>
            <button
              onClick={() => navigate(`/allProduct`)}
              className="text-2xl font-bold w-[220px] h-[60px] bg-transparent border-2 border-solid border-white text-white"
            >
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
