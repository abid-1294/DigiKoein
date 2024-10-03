import React from "react";
import "./Home.css";
import { FaArrowDownLong } from "react-icons/fa6";

const Home = () => {
  return (
    <div className="container">
      <div className="homebody">
        <p>Unified Product, Simplified Transection</p>
        <h1>Free your Money with digital Blockchain / DHL Bank</h1>
        <h5>
          DIGI-KOEIN is a cryptocurrency, It’s developed by Green Sked, led by
          financial experts, to transform the financial industry and enhance
          people's lives using Blockchain technology.
        </h5>
        <a href="">Learn More</a>
        <div className="scrollKey">
          <div className="circle"></div>
        </div>
        <h6>Scroll Down</h6>
        <FaArrowDownLong className="downArrow"/>
      </div>
    </div>
  );
};

export default Home;
