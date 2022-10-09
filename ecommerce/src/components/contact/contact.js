import React from "react";

const Contact = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center my-4">
            <h1>Contact Us</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <img src="/asset/mail.png" alt="Contact Us" width="600px" />
          </div>
          <div className="col-md-6">
            <form>
              <div class="form-group mb-3">
                <label for="exampleInput">Họ Tên</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInput"
                  aria-describedby="fullName"
                  placeholder="Ha Nguyen"
                />
              </div>
              <div class="form-group mb-3">
                <label for="exampleInputEmail1">Địa chỉ mail</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
              <div class="form-group mb-3">
                <label for="exampleTextarea">Nội dung</label>
                <textarea
                  class="form-control"
                  id="exampleTextarea"
                  aria-describedby="textArea"
                  placeholder="Write Something..."
                  rows="5"
                />
              </div>

              <button type="submit" class="btn btn-primary">
                Gửi Email
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
