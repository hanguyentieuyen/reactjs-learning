import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { NavLink } from "react-router-dom";
const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  //   let componentMounted = true;
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      // .then((res) => res.json())
      // .then((json) => console.log(json));
      //   if (componentMounted) {
      setLoading(false);
      setData(await response.clone().json());
      setFilter(await response.json());
      // console.log(filter);
      //   }
      //   return () => {
      //     componentMounted = false;
      //   };
    };
    getProducts();
  }, []);

  const filterItem = (cate) => {
    const updatedListItems = data.filter((a) => a.category === cate);
    setFilter(updatedListItems);
  };
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 category-filter">
          <button
            className="btn btn-outline-primary px-2 me-md-3"
            onClick={() => {
              setFilter(data);
            }}
          >
            Tất cả
          </button>
          <button
            className="btn btn-outline-primary  px-2 me-md-3"
            onClick={() => filterItem("men's clothing")}
          >
            Thời Trang Nam
          </button>
          <button
            className="btn btn-outline-primary  px-2 me-md-3"
            onClick={() => filterItem("women's clothing")}
          >
            Thời Trang Nữ
          </button>
          <button
            className="btn btn-outline-primary me-md-3 px-2"
            onClick={() => filterItem("jewelery")}
          >
            Trang sức
          </button>
          <button
            className="btn btn-outline-primary px-2 me-md-3"
            onClick={() => filterItem("electronics")}
          >
            Đồ công nghệ
          </button>
        </div>
        {filter.map((item) => {
          return (
            <>
              <div className="col-md-3">
                <div
                  className="card card-product h-80 text-center p-3 mb-4"
                  key={item.id}
                >
                  <img
                    src={item.image}
                    className="card-img-top"
                    alt={item.title}
                    height="270px"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {item.title.substring(0, 11)}
                    </h5>
                    <p className="card-text fw-bold lead">${item.price}</p>
                    <NavLink
                      to={`/products/${item.id}`}
                      className="btn btn-outline-dark"
                    >
                      Mua ngay
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };
  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">
              Sản phẩm mới nhất
            </h1>
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;
