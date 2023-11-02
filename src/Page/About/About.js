import React, { Component } from "react";
import "./About.css";
import img1 from "../images/images/slider-01.jpg";

class About extends Component {
  render() {
    return (
      <section className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="About-img">
              <img src={img1} alt="" />
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <h2>ABOUT US</h2>
            <h3>Lorem ipsum dolor</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              debitis dolorem exercitationem animi eos nemo, est ipsam mollitia
              ratione architecto sunt, a consequuntur explicabo, distinctio
              laboriosam. Minima, modi? Officiis, laborum.
            </p>
          </div>
        </div>
      </section>
    );
  }
}
export default About;
