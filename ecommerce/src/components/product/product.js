import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { useDispatch } from "react-redux";
import { addCart } from "../../redux/action";
const Product = () => {
  const [loading, setLoading] = useState([]);
  const [product, setProduct] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };
  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, []);

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead">
            Rating {product.rating && product.rating.rate}
            <i className="fa fa-star"></i>
          </p>
          <h3 className="display-6 fw-bold my-4">${product.price}</h3>
          <p className="lead">{product.description}</p>
          <button
            className="btn btn-outline-dark py-2 px-3"
            onClick={() => addProduct(product)}
          >
            Add to Cart
          </button>
          <NavLink to="/card" className="btn btn-dark ms-2 py-2 px-3">
            Go to Cart
          </NavLink>
        </div>
      </>
    );
  };
  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={400}></Skeleton>
        </div>
        <div className="col-md-6" style={{ lineHeight: 2 }}>
          <Skeleton height={50} width={300}></Skeleton>
          <Skeleton height={75}></Skeleton>
          <Skeleton height={25} width={150}></Skeleton>
          <Skeleton height={50}></Skeleton>
          <Skeleton height={150}></Skeleton>

          <Skeleton height={50} width={150}></Skeleton>
        </div>
      </>
    );
  };
  return (
    <div className="container py-5">
      <div className="row py-5">{loading ? <Loading /> : <ShowProduct />}</div>
    </div>
  );
};

export default Product;
