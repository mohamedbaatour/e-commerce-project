import React, { useContext , useState , useEffect } from "react";
import "./CSS/OrderHistory.css";
import { ShopContext } from "../Context/ShopContext";
import { Link } from "react-router-dom";

const OrderHistory = () => {
  const [orderItems, setOrderItems] = useState([]);
  const {  all_product } =
    useContext(ShopContext);

  useEffect(() => {
    if (localStorage.getItem("auth-token")) {
      fetch("http://localhost:4000/getorderhistory", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "auth-token": localStorage.getItem("auth-token"),
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => setOrderItems(data));
    }

    // Clear the cart collection in the backend here
    fetch("http://localhost:4000/addtohistory", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "auth-token": localStorage.getItem("auth-token"),
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Cart moved to order history successfully", data);
      });
  }, []);

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (orderItems[e.id] > 0) {
          return (
            <div className="cartitems-format cartitems-format-main" key={e.id}>
              <img src={e.image} alt="" className="carticon-product-icon" />
              <p>{e.name}</p>
              <p>${e.new_price}</p>
              <button className="cartitems-quantity">{orderItems[e.id]}</button>
              <p>${e.new_price * orderItems[e.id]}</p>
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <Link  to="/"> <button className="button-return">Return To Home</button></Link>
      </div>
    </div>
  );
};

export default OrderHistory;
