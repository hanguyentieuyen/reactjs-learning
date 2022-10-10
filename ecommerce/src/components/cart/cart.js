import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addCart, deleteCart } from "../../redux/action/index";
import { NavLink } from "react-router-dom";
const Cart = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.handleCart);
  // console.log(cartProducts);
  // const closeCart = (item) => {
  //   dispatch(deleteCart(item));
  // };
  const increaseItem = (product) => {
    dispatch(addCart(product));
  };

  const decreaseItem = (product) => {
    dispatch(deleteCart(product));
  };

  const totalCartPrice = cartProducts.reduce((total, currentValue) => {
    return total + currentValue.qty * currentValue.price;
  }, 0);
  const totalPrice = totalCartPrice?.toFixed(2);

  const emptyCart = () => {
    return (
      <div className="bg-light rounded-3 my-5 px-4">
        <div className="container py-4">
          <div className="row">
            <h3>Your Cart is Empty</h3>
          </div>
        </div>
      </div>
    );
  };
  const showTotalPrice = () => {
    return (
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-4">
            <h4 className="fw-bold">Tổng đơn hàng</h4>
          </div>
          <div className="col-md-4">
            <p className="fw-bold fs-4">${totalPrice}</p>
          </div>
        </div>
      </div>
    );
  };
  const cartItems = (product) => {
    return (
      <>
        <div className=" py-4 bg-light rounded-3 my-3">
          {cartProducts.map((product) => {
            const itemPrice = (product.qty * product.price).toFixed(2);
            return (
              <div className="container py-3 " key={product.id}>
                {/* <button
                className="btn btn-close float-end"
                aria-label="Close"
              ></button> */}
                <div className="row justify-content-center">
                  <div className="col-md-4">
                    <img
                      src={product.image}
                      alt={product.title}
                      width="200px"
                      height="200px"
                    />
                  </div>
                  <div className="col-md-4">
                    <h3>{product.title}</h3>
                    <p className="lead fw-bold">
                      {product.qty} x ${product.price}=${itemPrice}
                    </p>
                    <button
                      className="btn btn-outline-primary"
                      onClick={() => {
                        decreaseItem(product);
                      }}
                    >
                      <i className="fa fa-minus"></i>
                    </button>
                    <span className="px-4 fw-bold">{product.qty}</span>
                    <button
                      className="btn btn-outline-primary"
                      onClick={() => {
                        increaseItem(product);
                      }}
                    >
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  };
  return (
    <>
      {cartProducts.length === 0 && emptyCart()}
      {cartProducts?.length !== 0 && cartItems()}
      {cartProducts.length !== 0 && showTotalPrice()}
    </>
  );
};

export default Cart;
