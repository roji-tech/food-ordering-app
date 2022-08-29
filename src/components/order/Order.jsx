import React from "react";
import OrderStyle from "./orderStyle";
import img from "../../imgs/bon11.png";

const Order = ({ show }) => {
  return (
    <OrderStyle show={show}>
      <dir></dir>
      <div id="main">
        <h3>Your Orders</h3>

        <div className="list">
          <ul className="header grid">
            <li className="to_left">Item</li>
            <li>Qty</li>
            <li>Price</li>
            <li>Status</li>
          </ul>
          <div className="items ">
            <ul className="item grid">
              <li className="title">
                <img src={img} alt="aaa" />
                <div className="name">
                  <p>Stir Fry Pasta</p>
                  <small>Remove</small>
                </div>
              </li>
              <li className="quantity">3</li>
              <li className="price">N 1,000.00</li>
              <li className="price delivered">Delivered</li>
            </ul>
            <ul className="item grid">
              <li className="title">
                <img src={img} alt="aaa" />
                <div className="name">
                  <p>Stir Fry Pasta</p>
                  <small>Remove</small>
                </div>
              </li>
              <li className="quantity">3</li>
              <li className="price">N 1,000.00</li>
              <li className="price delivered">Delivered</li>
            </ul>
            <ul className="item grid">
              <li className="title">
                <img src={img} alt="aaa" />
                <div className="name">
                  <p>Stir Fry Pasta</p>
                  <small>Remove</small>
                </div>
              </li>
              <li className="quantity">3</li>
              <li className="price">N 1,000.00</li>
              <li className="price delivered">Delivered</li>
            </ul>
            <ul className="item grid">
              <li className="title">
                <img src={img} alt="aaa" />
                <div className="name">
                  <p>Stir Fry Pasta</p>
                  <small>Remove</small>
                </div>
              </li>
              <li className="quantity">3</li>
              <li className="price">N 1,000.00</li>
              <li className="price cooking">Cooking</li>
            </ul>
            <ul className="item grid">
              <li className="title">
                <img src={img} alt="aaa" />
                <div className="name">
                  <p>Stir Fry Pasta</p>
                  <small>Remove</small>
                </div>
              </li>
              <li className="quantity">3</li>
              <li className="price">N 1,000.00</li>
              <li className="price cooking">Cooking</li>
            </ul>
          </div>
        </div>
      </div>
    </OrderStyle>
  );
};

export default Order;
