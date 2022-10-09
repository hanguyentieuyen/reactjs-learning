import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const cart = useSelector((state) => state.handleCart);
  //console.log(cart);
  const cartTotal = cart.reduce((total, product) => {
    return total + product.qty;
  }, 0);
  //console.log(cartTotal);
  return (
    <nav className="navbar navbar-expand-lg bg-light bg-white shadow-sm py-3">
      <div className="container">
        <NavLink className="navbar-brand fw-bold fs-4" to="/">
          E-SHOP
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item px-2">
              <NavLink
                className="nav-link active fw-bold"
                aria-current="page"
                to="/"
              >
                Trang chủ
              </NavLink>
            </li>
            <li className="nav-item px-2">
              <NavLink className="nav-link fw-bold " to="/products">
                Sản phẩm
              </NavLink>
            </li>
            <li className="nav-item px-2">
              <NavLink className="nav-link fw-bold " to="/about">
                Về chúng tôi
              </NavLink>
            </li>
            <li className="nav-item px-2">
              <NavLink className="nav-link fw-bold " to="/contact">
                Liên hệ
              </NavLink>
            </li>
          </ul>
          <div className="buttons">
            {/* <NavLink to="/login" className="btn btn-outline-dark">
              <i className="fa fa-sign-in me-1"></i>
              Login
            </NavLink>
            <NavLink to="/register" className="btn btn-outline-dark">
              <i className="fa fa-user-plus me-1"></i>
              Register
            </NavLink> */}
            <NavLink to="/cart" className="btn btn-outline-dark">
              <i className="fa fa-shopping-cart me-1"></i>
              Giỏ hàng({cartTotal})
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
