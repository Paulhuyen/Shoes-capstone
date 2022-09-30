import React from "react";
import "../../assets/styles.scss";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { registerApi } from "../../redux/reducers/registerReducer";
import { useDispatch } from "react-redux";
import axios, { Axios } from "axios";
export default function Register() {
  const [showPassWord, setShowPassword] = useState("password");
  const [showEyeOpen, setShowEyeOpen] = useState("none");
  const [showEyeClose, setShowEyeClose] = useState("block");
  const [showPassWordCf, setShowPasswordCf] = useState("comfirmpassword");
  const [showEyeOpenCf, setShowEyeOpenCf] = useState("none");
  const [showEyeCloseCf, setShowEyeCloseCf] = useState("block");
  const dispatch = useDispatch();
  const frm = useFormik({
    //dữ liệu ban đàu của form
    initialValues: {
      email: "",
      password: "",
      // comfirmpassword:"",
      name: "",
      phone: "",
      gender: true,
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .required("Bạn chưa nhập Email")
        .email("Email không đúng định dạng"),
      password: Yup.string()
        .required("Bạn chưa nhập password")
        .matches(
          /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{6,20}$/,
          "Password từ 6-20 bao gồm 1 ký tự 1 chữ hoa và 1 chữ thường"
        ),
      comfirmpassword: Yup.string()
        .required("Bạn chưa nhận password comfirm")
        .oneOf(
          [Yup.ref("password"), null],
          "Password comfirm chưa giống Password"
        ),
      name: Yup.string().required("Bạn chưa nhập name"),
      phone: Yup.string()
        .required("Bạn chưa nhập number phone")
        .matches(
          /^(0|84)(2(0[3-9]|1[0-6|8|9]|2[0-2|5-9]|3[2-9]|4[0-9]|5[1|2|4-9]|6[0-3|9]|7[0-7]|8[0-9]|9[0-4|6|7|9])|3[2-9]|5[5|6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])([0-9]{7})$/,
          "Số điện thoại không đúng"
        ),
    }),
    onSubmit: (values) => {
      dispatch(registerApi(values));
      console.log(values);
    },
  });
  return (
    <form className="container" onSubmit={frm.handleSubmit}>
      <h1>Register</h1>
      <hr />
      <div className="row form-style-rg">
        <div className="col-lg-6 col-md-12">
          <div className="form-group">
            <p>Email</p>
            <input
              className="input-rg"
              type="text"
              name="email"
              id="email"
              onBlur={frm.handleBlur}
              onChange={frm.handleChange}
            />
            {frm.errors.email ? (
              <p className="text-danger">{frm.errors.email}</p>
            ) : (
              ""
            )}
          </div>
          <div className="form-group">
            <p>Password</p>
            <input
              className="input-rg"
              name="password"
              id="password"
              type={showPassWord}
              
              onChange={frm.handleChange}
            />
            <i
              className="fas fa-eye eye-open "  style={{ display: showEyeOpen }}   onClick={() => {
                setShowEyeClose("block");
                setShowEyeOpen("none");
                setShowPassword("password");
              }}
            />
            <i className="fas fa-eye-slash eye-close" style={{ display: showEyeClose }} onClick={() => {
                setShowEyeClose("none");
                setShowEyeOpen("block");
                setShowPassword("text");
              }}
            />

            {frm.errors.password ? (
              <p className="text-danger">{frm.errors.password}</p>
            ) : (
              ""
            )}
          </div>
          <div className="form-group">
            <p>Password comfirm</p>
            
            <input
              className="input-rg"
              type={showPassWordCf}
              name="comfirmpassword"
              id="comfirmpassword"
              onChange={frm.handleChange}
            />
            <i
              className="fas fa-eye eye-open "  style={{ display: showEyeOpenCf }}   onClick={() => {
                setShowEyeCloseCf("block");
                setShowEyeOpenCf("none");
                setShowPasswordCf("password");
              }}
            />
            <i className="fas fa-eye-slash eye-close" style={{ display: showEyeCloseCf }} onClick={() => {
                setShowEyeCloseCf("none");
                setShowEyeOpenCf("block");
                setShowPasswordCf("text");
              }}
            />
            {frm.errors.comfirmpassword ? (
              <p className="text-danger">{frm.errors.comfirmpassword}</p>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="col-lg-6 col-md">
          <div className="form-group">
            <p>Name</p>
            <input
              className="input-rg"
              type="text"
              id="name"
              onChange={frm.handleChange}
            />
            {frm.errors.name ? (
              <p className="text-danger">{frm.errors.name}</p>
            ) : (
              ""
            )}
          </div>
          <div className="form-group">
            <p>Phone</p>
            <input
              className="input-rg"
              type="text"
              id="phone"
              onChange={frm.handleChange}
            />
            {frm.errors.phone ? (
              <p className="text-danger">{frm.errors.phone}</p>
            ) : (
              ""
            )}
          </div>
          <div className="form-group pt-5">
            <div
              id="gender"
              name="gender"
              className="d-flex justify-content-start "
            >
              <label className="my-2">Gender</label>
              <input
                className="mx-4"
                name="gender"
                id="gender"
                value="true"
                type="radio"
              />
              <input
                className="mx-2"
                name="gender"
                id="gender"
                value="false"
                type="radio"
              />
            </div>
            <p className="text-danger"></p>
          </div>
          <div className="form-group">
            <button className="btn-submit" type="submit">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
