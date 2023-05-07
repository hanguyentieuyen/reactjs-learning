import { useState, useEffect } from "react";
import "./signup.css";
import { useFormik } from "formik";
import * as Yup from "yup";
const SignupForm = () => {
  //   const [email, setEmail] = useState("");
  //   const [name, setName] = useState("");
  //   const [phone, setPhone] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [confirmedPassword, setConfirmPassword] = useState("");

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      phone: "",
      password: "",
      confirmedPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Required")
        .min(4, "Must be 4 characters or more"),
      email: Yup.string()
        .required("Required")
        .matches(
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
          "Please enter a valid email address"
        ),
      password: Yup.string()
        .required("Required")
        .matches(
          /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/,
          "Password must be at least 8 characters and contain at least one letter, one number and a special character"
        ),
      confirmedPassword: Yup.string()
        .required("Required")
        .oneOf([Yup.ref("password"), null], "Password must match"),
      phone: Yup.string()
        .required("Required")
        .matches(
          /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
          "Must be a valid phone number"
        ),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  //console.log(formik.errors.email);

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     const newUser = {
  //       email: email,
  //       name: name,
  //       phone: phone,
  //       password: password,
  //     };
  //     console.log(newUser);
  //   };

  //console.log(formik.values);
  //   // C1 validate bang useEffect voi dependency
  //   useEffect(() => {
  //     if (name.length < 4) {
  //       console.log("name is too ");
  //     }
  //   }, [name]);
  // C2 Formik(package dùng để quản lý form) va Yup(package dùng để validate dữ liệu)

  return (
    <section>
      <form className="infoform" onSubmit={formik.handleSubmit}>
        <label>Your name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          //   onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        {formik.errors.name && <p className="errorMsg">{formik.errors.name}</p>}
        <label>Email address</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          //   onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        {formik.errors.email && (
          <p className="errorMsg">{formik.errors.email}</p>
        )}
        <label>Password</label>
        <input
          type="text"
          name="password"
          id="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          //   onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
        {formik.errors.password && (
          <p className="errorMsg">{formik.errors.password}</p>
        )}
        <label>Confirm Password</label>
        <input
          type="text"
          name="confirmedPassword"
          id="confirmedPassword"
          value={formik.values.confirmedPassword}
          onChange={formik.handleChange}
          //  onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm your password"
        />
        {formik.errors.confirmedPassword && (
          <p className="errorMsg">{formik.errors.confirmedPassword}</p>
        )}
        <label>Phone Number</label>
        <input
          type="text"
          name="phone"
          id="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          //  onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter your phone numbers"
        />
        {formik.errors.phone && (
          <p className="errorMsg">{formik.errors.phone}</p>
        )}
        <button type="submit">Continue</button>
      </form>
    </section>
  );
};

export default SignupForm;
