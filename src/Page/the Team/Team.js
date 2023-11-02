import React from "react";
import "./Team.css";
import img1 from "../images/images/stuff-img-01.jpg";
import img2 from "../images/images/stuff-img-02.jpg";
import img3 from "../images/images/stuff-img-03.jpg";
import img4 from "../images/images/stuff-img-04.jpg";
import img5 from "../images/images/stuff-img-05.jpg";
import img6 from "../images/images/stuff-img-06.jpg";

function Team() {
  return (
    <section class="The-team container">
      <div class="text-center mt-5">
        <h1>
          The <span>Team</span>
        </h1>
        <p>A well-known quote, contained in a blockquote element.</p>
        <div class="blockquote-footer pt-2">Someone famous in Source Title</div>
      </div>

      {/* <!-- team-img --> */}
      <div class="Team-Img row">
        <div class="col-xl-4 col-md-4 col-sm-2">
          <div class="item">
            <img src={img1} alt="" />
            <h2>WILLIAMSON</h2>
            <div class="i">
              <div>
                <span>
                  <i class="fab fa-instagram"></i>
                </span>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-invision"></i>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-4 col-md-4 col-sm-2">
          <div class="item">
            <img src={img2} alt="" />
            <h2>WILLIAMSON</h2>
            <div class="i">
              <div>
                <span>
                  <i class="fab fa-instagram"></i>
                </span>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-invision"></i>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-4 col-md-4 col-sm-2">
          <div class="item">
            <img src={img3} alt="" />
            <h2>WILLIAMSON</h2>
            <div class="i">
              <div>
                <span>
                  <i class="fab fa-instagram"></i>
                </span>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-invision"></i>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-4 col-md-4 col-sm-2">
          <div class="item">
            <img src={img4} alt="" />
            <h2>WILLIAMSON</h2>
            <div class="i">
              <div>
                <span>
                  <i class="fab fa-instagram"></i>
                </span>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-invision"></i>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-4 col-md-4 col-sm-2">
          <div class="item">
            <img src={img5} alt="" />
            <h2>WILLIAMSON</h2>
            <div class="i">
              <div>
                <span>
                  <i class="fab fa-instagram"></i>
                </span>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-invision"></i>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-4 col-md-4 col-sm-2">
          <div class="item">
            <img src={img6} alt="" />
            <h2>WILLIAMSON</h2>
            <div class="i">
              <div>
                <span>
                  <i class="fab fa-instagram"></i>
                </span>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-invision"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Team;
