import React from "react";
import Products from "../products/products";
const Home = () => {
  return (
    <div className="hero">
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="/asset/bg.jpg" alt="First slide" />
            <div class="carousel-caption d-none d-md-block">
              <h1 className="fw-bold display-6">
                Mùa đông ấm áp và phong cách
              </h1>
              <p className="fs-5">Bộ Sưu Tập HEATTECH</p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="/asset/bg1.jpg"
              alt="Second slide"
            />
            <div class="carousel-caption d-none d-md-block">
              <h1 className="fw-bold display-6">
                Cải tiến phần cổ áo vừa vặn và tay áo rộng rãi, thoải mái hơn.
              </h1>
              <p className="fs-5">HEATTECH Áo Thun Cổ Lọ</p>
            </div>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="/asset/bg2.jpg" alt="Third slide" />
            <div class="carousel-caption d-none d-md-block">
              <h1 className="fw-bold display-6">Nhẹ và ấm đến kinh ngạc</h1>
              <p className="fs-5">Bộ sưu tập áo khoác Ultra Light Down</p>
            </div>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="/asset/bg3.jpg" alt="Third slide" />
            <div class="carousel-caption d-none d-md-block">
              <h1 className="fw-bold display-6">Lớp vải demin nhẹ tiện dụng</h1>
              <p className="fs-5">Áo khoác Demin Dáng Ngắn</p>
            </div>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="/asset/bg4.jpg" alt="Third slide" />
            <div class="carousel-caption d-none d-md-block">
              <h1 className="fw-bold display-6">
                Thiết kế áo chống nhăn để dễ dàng chăm sóc
              </h1>
              <p className="fs-5">Áo kiểu váy Rayon Pintuck dài tay</p>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <Products />
    </div>
  );
};

export default Home;
