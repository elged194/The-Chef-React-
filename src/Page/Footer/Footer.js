import React, { Fragment } from "react";
import "./Footer.css";
function Footer() {
  return (
    <Fragment>
      <footer class="mt-5">
        <figure class="text-center">
          <h1>The CONTACT</h1>
          <p>A well-known quote, contained in a blockquote element.</p>
          <div class="blockquote-footer">Someone famous in Source Title</div>
        </figure>

        <div class="row m-0">
          {/* <!-- COMUNICATION --> */}
          <div class="col-xl-3 col-md-6 col-sm-12">
            <div class="COMUNICATION">
              <h4>COMUNICATION</h4>
              <p>
                <i class="fas fa-map-marker-alt"></i>
                <a href="/">street name & number</a>
              </p>
              <hr />
              <p>
                <i class="fas fa-phone-alt"></i>
                <a href="/">01098351052 </a>
              </p>
              <hr />
              <p>
                <i class="far fa-envelope"></i>
                <a href="/">elged@gmail.com </a>
              </p>
              <hr />
              <div class="font">
                <i class="fab fa-twitter"></i>
                <i class="fab fa-invision"></i>
                <i class="fab fa-facebook-square"></i>
                <i class="fab fa-instagram"></i>
              </div>
              <hr />
            </div>
          </div>
          {/* <!-- Lorem --> */}
          <div class="col-xl-3 col-md-6 col-sm-12">
            <div class="Lorem">
              <h4>Lorem Ipsum Dolor</h4>
              <p>
                <a href="/">Lorem ipsum dolor, sit </a>
              </p>
              <hr />
              <p>
                <a href="/">amet consectetur adipisicing elit.</a>
              </p>
              <hr />
              <p>
                <a href="/"> Quos, officiis pariatur. </a>
              </p>
              <hr />
              <p>
                <a href="/">Odio sapiente dicta perferendis </a>
              </p>
              <hr />
            </div>
          </div>
          {/* <!-- Work-HOURS --> */}
          <div class="col-xl-3 col-md-6 col-sm-12">
            <div class="Work-Hours">
              <h4>Work Hours</h4>
              <p>Monday : Closed</p>
              <hr />
              <b>Tuesday to Friday</b>
              <p>7:00 AM - 9:00 PM</p>
              <hr />
              <b>Saturday - Sunday</b>
              <p>11:00 AM - 10:00 PM</p>
              <hr />
            </div>
          </div>
          {/* <!-- LOG-IN --> */}
          <div class="col-xl-3 col-md-6 col-sm-12">
            <div class="LOG-IN" id="login-footer">
              <h4>LOG IN</h4>

              <form action="">
                <div class="col-12 pt-1">
                  <label for="floatingInput">Email address</label>
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInput"
                    placeholder=" name@gmail.com "
                  />
                </div>
                <div class="col-12">
                  <label for="floatingPassword">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="floatingPassword"
                    placeholder=" Password "
                  />
                </div>
                <div class="col-12 submit">
                  <a href="/" class="btn">
                    LOG IN
                  </a>
                  <a
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                    href="/"
                    class="btn REGISTER"
                  >
                    REGISTER
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}
export default Footer;
