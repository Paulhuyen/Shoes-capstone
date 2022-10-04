import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../../assets/styles.scss";
import { useDispatch } from "react-redux";
import { loginApi,responseFacebook } from "../../redux/reducers/userReducer";
import FacebookLogin from "react-facebook-login";
import axios from "axios";
// import { ACCESS_TOKEN, getStore, setCookie } from "../../util/tools";

export default function Login() {
  const [showPassWord, setShowPassword] = useState("password");
  const [showEyeOpen, setShowEyeOpen] = useState("none");
  const [showEyeClose, setShowEyeClose] = useState("block");


  const responseFacebook = (response) => {
    console.log(response);
    axios({
      url:'https://shop.cyberlearn.vn/api/Users/facebooklogin',
      method:'POST',
      data: {
        facebookToken:response.accessToken
      }
    }).then((res)=>{
      localStorage.setItem("accessToken", res.data.content.accessToken);

    })
  };
  const dispatch = useDispatch();
  //Vladition
  const frm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .required("Email không được bỏ trống")
        .email("Email không đúng định dạng"),
      password: Yup.string()
        .required("Password không được bỏ trống")
        .min(6, "pass từ 6 - 20 ký tự!")
        .max(20, "pass từ 6 - 20 ký tự!"),
    }),
    onSubmit: (values) => {
      dispatch(loginApi(values));
    },
  });
  // handleSubmitfb = values =>{
  //    dispatch(responseFacebook(values));
  // }
  return (
    <div>
      <form className="container" onSubmit={frm.handleSubmit}>
        <h1>Login</h1>
        <hr />
        <div className="form-style">
          <div className="form-group">
            <p>Email</p>
            <input
              type="text"
              name="email"
              id="email"
              className="input-form"
              onChange={frm.handleChange}
            />
            {frm.errors.email ? (
              <p className="text-danger">{frm.errors.email}</p>
            ) : (
              ""
            )}
          </div>
          <div className="form-group mt-3">
            <p>Password</p>
            <input
              type={showPassWord}
              name="password"
              id="password"
              className="input-form"
              onChange={frm.handleChange}
            />
                        <i
              className="fas fas-eye fa-eye eye-open "  style={{ display: showEyeOpen }}   onClick={() => {
                setShowEyeClose("block");
                setShowEyeOpen("none");
                setShowPassword("password");
              }}
            />
            <i className="fas fas-eye fa-eye-slash eye-close" style={{ display: showEyeClose }} onClick={() => {
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
          <div className="form-group mt-2">
            <div className="row">
              <div className="col-8 text-end pt-3">
                <a href="">Register now ?</a>
              </div>
              <div className="col-4 text-end">
                <button className="button" type="submit">
                  LOGIN
                </button>
              </div>
              <div className="form-group mt-2">
                <FacebookLogin
                  appId="469528951575411"
                  autoLoad={true}
                  fields="name,email,picture"
                  callback={responseFacebook}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
