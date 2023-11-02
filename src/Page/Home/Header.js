import React, { Component, Fragment } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <Fragment>
        <header>
          <div className="row">
            <div className="col-6">
              <div className="text-header">
                <h1>Go Vegan!</h1>
                <h2>FOOD RECIPES & MORE!</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button>Order Now</button>
              </div>
            </div>
            <div className="col-6"></div>
          </div>
        </header>
        {/* completion */}
        <section className="completion container mt-5">
          <div className="row">
            <div className="col-lg-4 col-md-6 ">
              <div className="element ">
                <i class="fa-solid fa-percent"></i>
                <div>
                  <h3>Descount Voucher</h3>
                  <p>
                    20% off on your first order! Use code: MINICLEAN20 at
                    checkout.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="element ">
                <i class="fa-solid fa-pizza-slice"></i>
                <div>
                  <h3>Fresh Healthy Dood</h3>
                  <p>
                    Our pizzas are made fresh daily and cooked to perfection in
                    our wood oven.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 ">
              <div className="element">
                <i class="fa-solid fa-utensils"></i>
                <div>
                  <h3>Fast Serve On Table</h3>
                  <p>
                    We serve food hot straight away so you can enjoy it as soon
                    as possible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}
export default Header;
