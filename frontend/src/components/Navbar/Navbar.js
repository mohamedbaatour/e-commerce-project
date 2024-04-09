import React, { useState, useContext } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>E-commerce</p>
        <div style={{ display: "flex" }}>
          <ul className="nav-menu">
            <li
              onClick={() => {
                setMenu("shop");
              }}
            >
              <Link to="/" style={{ color: "black", textDecoration: "none" }}>
                Shop
              </Link>
              {menu === "shop" ? <hr /> : <></>}
            </li>
            <li
              onClick={() => {
                setMenu("mens");
              }}
            >
              <Link
                to="/mens"
                style={{ color: "black", textDecoration: "none" }}
              >
                Men
              </Link>
              {menu === "mens" ? <hr /> : <></>}
            </li>
            <li
              onClick={() => {
                setMenu("womens");
              }}
            >
              <Link
                to="/womens"
                style={{ color: "black", textDecoration: "none" }}
              >
                Women
              </Link>
              {menu === "womens" ? <hr /> : <></>}
            </li>
            <li
              onClick={() => {
                setMenu("kids");
              }}
            >
              <Link
                to="/kids"
                style={{ color: "black", textDecoration: "none" }}
              >
                Kids
              </Link>
              {menu === "kids" ? <hr /> : <></>}
            </li>
          </ul>
          <div className="nav-login-cart">
            {localStorage.getItem("auth-token") ? (
              <button
                onClick={() => {
                  localStorage.removeItem("auth-token");
                  window.location.replace("/");
                }}
              >
                Logout
              </button>
            ) : (
              <Link to="/login">
                <button>Login</button>
              </Link>
            )}

            <Link to="/cart">
              <img src={cart_icon} alt="" />
            </Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
