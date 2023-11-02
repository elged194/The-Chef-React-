import React from "react";

import "./Menu.css";
import { Card } from "react-bootstrap";
import img1 from "../images/Plate/anh-nguyen-kcA-c3f_3FE-unsplash.png";
import img2 from "../images/Plate/do-mee-SH8_JmrsQcw.jpg";
import img3 from "../images/Plate/martin-widenka-tkfRSPt-jdk-unsplash.jpg";
import img4 from "../images/Plate/kisspng-hamburger-street-food.png";

// ----------------------//
import magic from "../images/nicolas-perondi.jpg";
import Main_menu1 from "../images/Plate/do-mee-SH8_JmrsQcw.jpg";
import Main_menu2 from "../images/Plate/kisspng-hamburger-street-food.png";
import Main_menu3 from "../images/Plate/martin-widenka-tkfRSPt-jdk-unsplash.jpg";
import Main_menu4 from "../images/Plate/menu-image1.jpg";
import Main_menu5 from "../images/Plate/menu-image6.jpg";
import Main_menu6 from "../images/Plate/menu-image4.jpg";
function Menu() {
  return (
    <section className="Food-Menu container mt-5">
      <div className="text-center">
        <h1>
          Special<span> Menu</span>
        </h1>
        <p>A well-known quote, contained in a blockquote element.</p>
        <div className="blockquote-footer pt-2">Someone famous in Title</div>
      </div>
      {/* Main-menu */}
      <div className="row Main-menu">
        <div className="col-lg-4 col-md-4  col-sm-12  ">
          <div className="magic">
            <img src={magic} class="magic-img" alt="" />
            <div className="magic-text">
              <h1>Healthy Food</h1>
              <br />
              <h2>
                <span>50%</span> OFF
              </h2>
              <h2>Special Menu</h2>
            </div>
          </div>
        </div>
        <div className="col-lg-8 col-md-8 col-sm-12">
          <div className="row">
            <Card className="col-lg-4 col-md-4 col-sm-6">
              <Card.Img variant="top" src={Main_menu1} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
                <Card.Text>Some quick example</Card.Text>
              </Card.Body>
            </Card>
            <Card className="col-lg-4 col-md-4 col-sm-6">
              <Card.Img variant="top" src={Main_menu2} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
                <Card.Text>Some quick example</Card.Text>
              </Card.Body>
            </Card>
            <Card className="col-lg-4 col-md-4 col-sm-6">
              <Card.Img variant="top" src={Main_menu3} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
                <Card.Text>Some quick example</Card.Text>
              </Card.Body>
            </Card>
            <Card className="col-lg-4 col-md-4 col-sm-6">
              <Card.Img variant="top" src={Main_menu4} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
                <Card.Text>Some quick example</Card.Text>
              </Card.Body>
            </Card>
            <Card className="col-lg-4 col-md-4 col-sm-6">
              <Card.Img variant="top" src={Main_menu5} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
                <Card.Text>Some quick example</Card.Text>
              </Card.Body>
            </Card>
            <Card className="col-lg-4 col-md-4 col-sm-6">
              <Card.Img variant="top" src={Main_menu6} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
                <Card.Text>Some quick example</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      {/* menu */}
      <div className="row mt-5">
        <div className="col-lg-3 col-md-6">
          <div className=" text-menu">
            <i class="fa-solid fa-pizza-slice"></i>
            <h4>Chef Special</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos</p>

            <img src={img1} class="img1" alt="" />
          </div>
        </div>
        <div className="col-lg-3 col-md-6 ">
          <div className=" img-menu ">
            <img src={img1} class="img1" alt="" />
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className=" text-menu">
            <i class="fa-solid fa-chalkboard-user"></i>
            <h4>Original Recipes</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos</p>
            <img src={img2} class="img1" alt="" />
          </div>
        </div>
        <div className="col-lg-3 col-md-6 ">
          <div className=" img-menu ">
            <img src={img2} class="img1" alt="" />
          </div>
        </div>

        <div className="col-lg-3 col-md-6 ">
          <div className=" img-menu ">
            <img src={img3} class="img1" alt="" />
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className=" text-menu">
            <i class="fa-solid fa-user-tie"></i>
            <h4>AI Yeur Service</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos</p>
            <img src={img3} class="img1" alt="" />
          </div>
        </div>
        <div className="col-lg-3 col-md-6 ">
          <div className=" img-menu ">
            <img src={img4} class="img1" alt="" />
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className=" text-menu">
            <i class="fa-solid fa-user-tie"></i>
            <h4>AI Yeur Service</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos</p>
            <img src={img4} class="img1" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Menu;
