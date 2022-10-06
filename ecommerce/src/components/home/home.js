import React from "react";
import Products from "../products/products";
const Home = () => {
  return (
    <div className="hero">
      <div className="card text-white bg-dark border-0">
        <img src="/asset/bg.jpg" className="card-img" alt="background" />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container ">
            <h5 className="card-title display-4 fw-bolder mb-0">
              Mùa đông ấm áp và phong cách
            </h5>
            <p className="card-text fs-5">Bộ Sưu Tập HEATTECH</p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Home;
