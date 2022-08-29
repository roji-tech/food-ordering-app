import React from "react";
import CartStyle from "./cartStyle";
import img from "../../imgs/bon11.png";

const Cart = ({ show }) => {
  return (
    <CartStyle show={show}>
      <dir></dir>
      <div id="main">
        <h3>Your Cart</h3>

        <div className="list">
          <ul className="header grid">
            <li className="to_left">Item</li>
            <li>Qty</li>
            <li>Unit Price</li>
            <li>Sub-total</li>
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
              <li className="price">N 3,000.00</li>
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
              <li className="price">N 3,000.00</li>
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
              <li className="price">N 3,000.00</li>
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
              <li className="price">N 3,000.00</li>
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
              <li className="price">N 3,000.00</li>
            </ul>
          </div>
        </div>
        <div className="total">
          <div className="calc">
            <p className="name">Total:</p>
            <p className="amount">N 30,000.00</p>
          </div>
          <button type="button" className="buttonT">
            Checkout
          </button>
        </div>
      </div>
    </CartStyle>
  );
};

export default Cart;
