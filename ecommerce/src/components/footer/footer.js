import React from "react";

const Footer = () => {
  return (
    <div className="container-fuild footer-wrapper">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-3">
            <h4 className="">Về Shop</h4>
            <ul>
              <li>Thông tin</li>
              <li>Danh sách cửa hàng</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4 className="">Trợ giúp</h4>
            <ul>
              <li>FAQ</li>
              <li>Chính sách trả hàng</li>
              <li>Chính sách bảo mật</li>
              <li>Tiếp cận</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4 className="">Tài khoản</h4>
            <ul>
              <li>Tư cách thành viên</li>
              <li>Hồ sơ</li>
              <li>Coupons</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4 className="">Tài khoản xã hội</h4>
            <ul>
              <li>
                <a href="#" className="">
                  <img
                    src="/asset/fb.png"
                    width="20px"
                    height="20px"
                    alt="facebook"
                    className="me-2"
                  />
                  Facebook
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="/asset/instagram.png"
                    width="20px"
                    height="20px"
                    alt="instagram"
                    className="me-2"
                  />
                  Instagram
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="/asset/youtube.png"
                    width="20px"
                    height="20px"
                    alt="youtube"
                    className="me-2"
                  />
                  Youtube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="container d-flex justify-content-between">
        <div>
          <p className="fw-bold">BẢN QUYỀN THUỘC CÔNG TY E-SHOP</p>
          <p>
            Tên công ty: E-SHOP, LTD Giấy chứng nhận đăng ký doanh nghiệp số:
            0315304731.
          </p>
          <img src="/asset/bct.png" alt="license" className="mb-4" />
        </div>
        <div>
          <a className="text-secondary me-3" href="#">
            Điều khoản sử dụng
          </a>
          <a className="text-secondary" href="#">
            Chính sách bảo mật
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
