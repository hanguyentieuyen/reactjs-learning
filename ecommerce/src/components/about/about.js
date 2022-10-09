import React from "react";
import { NavLink } from "react-router-dom";
const About = () => {
  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="fw-bold mb-5">Về chúng tôi</h1>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
            <NavLink
              to="/contact"
              className="btn btn-primary mt-4 py-2 px-4 text-light"
            >
              Liên hệ
            </NavLink>
          </div>
          <div className="col-md-6 ">
            <img
              src="/asset/contact.png"
              alt="About Us"
              height="500px"
              width="700px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
