import React from "react";
import "./Our-Chefs.css";
import img1 from "../images/team-image2.jpg";
import img2 from "../images/team-image3.jpg";
import img3 from "../images/team-image1.jpg";

function OurChefs() {
  return (
    <section className="container ">
      {/* top text  */}
      <div className="text-center pb-5">
        <h1>
          Meet Our <span>Chefs</span>
        </h1>
        <p>A well-known quote, contained in a blockquote element.</p>
        <div className="blockquote-footer pt-2">
          Someone famous in Source Title
        </div>
      </div>
      {/* row */}
      <div className="row">
        {/* imghvr-slide-up */}
        <div className="col-lg-4 col-md-6 col-sm-12">
          <figure className="imghvr-slide-up">
            <img src={img1} alt="" />
            <figcaption>
              <h3 className="ih-fade-down ih-delay-sm">Duis Vel Iacus</h3>
              <p className="ih-zoom-in ih-delay-md">
                <i>
                  "I have the simplest tastes, I am always satisfied with the
                  best."
                </i>
              </p>
              <i className="fab fa-facebook"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-invision"></i>
            </figcaption>
          </figure>
        </div>
        {/* imghvr-slide-up */}
        <div className="col-lg-4 col-md-6 col-sm-12">
          <figure className="imghvr-slide-up">
            <img src={img2} alt="" />
            <figcaption>
              <h3 className="ih-fade-down ih-delay-sm">Duis Vel Iacus</h3>
              <p className="ih-zoom-in ih-delay-md">
                <i>
                  "I have the simplest tastes, I am always satisfied with the
                  best."
                </i>
              </p>
              <i className="fab fa-facebook"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-invision"></i>
            </figcaption>
          </figure>
        </div>
        {/* imghvr-slide-up */}
        <div className="col-lg-4 col-md-6 col-sm-12">
          <figure className="imghvr-slide-up">
            <img src={img3} alt="" />
            <figcaption>
              <h3 className="ih-fade-down ih-delay-sm">Duis Vel Iacus</h3>
              <p className="ih-zoom-in ih-delay-md">
                <i>
                  "I have the simplest tastes, I am always satisfied with the
                  best."
                </i>
              </p>
              <i className="fab fa-facebook"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-invision"></i>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
export default OurChefs;
