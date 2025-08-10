import React, { useContext, useState } from "react";
import "../assets/asset";
import "./HomePage.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Products from "./Products";
import ViewCart from "./ViewCart";
import Content from "./Content";
import Footer from "./Footer";
import BoxHeart from "./BoxHeart";
import Header from "./Header";
import Slide from "./Slide";
const HomePage = () => {
  const [visible, setVisible] = useState(false);
  const toggleCart = () => {
    setVisible((prev) => !prev); // This flips the value: true ⇄ false
  };
  return (
    <div>
      <div className="page-container">
        <div className="row">
          <BoxHeart />
          <div className="col-lg-6 p-0">
            <Header toggleCart={toggleCart} />
            <Slide />
            <div className="products mt-3">
              <h3 className="d-flex justify-content-center">ផ្កា Blushes</h3>
              <Products />
              <h3 className="d-flex justify-content-center mt-3">មាតិកា</h3>
              <Content />
            </div>{" "}
            <br />
            <Footer />
          </div>
          <BoxHeart />
        </div>
      </div>
      <ViewCart addClass={visible} />
    </div>
  );
};

export default HomePage;
