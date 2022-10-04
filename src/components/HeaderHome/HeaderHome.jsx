import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { history } from "../../index";
import "../../assets/styles.scss";
import { USER_LOGIN,clearStore } from "../../util/tools";

// import { useSelector } from "react-redux";

export default function HeaderHome() {
  const { userLogin } = useSelector((state) => state.userReducer);
  function logOut() {
    clearStore(USER_LOGIN);
    localStorage.clear();
    history.push("/login");
    window.location.reload();
  }

  const renderLoginNavItem = () => {
    if (userLogin == null) {
      return (
        <NavLink className="nav-link active text-light mx-2" to="/login">
          Login
        </NavLink>
      );
    } else {
      return (
        <div className="nav-link text-light mx-2" to="/">
          <img
            src={userLogin.avatar}
            width="50px"
            style={{ borderRadius: 50 }}
            alt=""
          />
          <span className="text-light mx-1">{userLogin.name}</span>
          <div class="btn-group">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="triggerId"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            ></button>
            <div
              class="dropdown-menu dropdown-menu-start p-2"
              aria-labelledby="triggerId"
            >
              <NavLink class="dropdown-item ml-2" to="/profile">
                Profile
              </NavLink>
              <button className="btn btn-success" onClick={logOut}>
                Đăng Xuất
              </button>
            </div>
          </div>
        </div>
      );
    }
  };
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <NavLink className="navbar-brand px-2" to="/">
          <img src="../../img/logoCyber.png" alt="..." />
        </NavLink>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        />
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" to="/" aria-current="page">
                Home <span className="visually-hidden">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " to="/search" aria-current="page">
                Search <span className="visually-hidden">(current)</span>
              </NavLink>
            </li>
          </ul>
          <NavLink className="nav-link  text-light mx-3">
            <i class="fas fa-cart-arrow-down"></i> ( 1 )
          </NavLink>
          {renderLoginNavItem()}
          <NavLink className="nav-link text-light mx-3" to="/register">
            Register
          </NavLink>
        </div>
      </nav>
      {/* Menu */}
      <nav className="navbar navbar-expand-sm navbar-dark bg-white">
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        />
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav text-menu me-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                style={{ borderBottom: "1px solid black", color: "black" }}
                to="/"
                aria-current="page"
              >
                Home <span className="visually-hidden">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link "
                to="/men"
                style={{ color: "black" }}
                aria-current="page"
              >
                Men <span className="visually-hidden">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link "
                to="/women"
                style={{ color: "black" }}
                aria-current="page"
              >
                Women <span className="visually-hidden">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link "
                to="/kid"
                style={{ color: "black" }}
                aria-current="page"
              >
                Kid <span className="visually-hidden">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link "
                to="/sport"
                style={{ color: "black" }}
                aria-current="page"
              >
                Sport <span className="visually-hidden">(current)</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
