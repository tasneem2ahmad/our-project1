import React from "react";
import "./About_Us.css";

class About_Us extends React.Component {
  render() {
    return (
      <div>
        <div class="loader_bg">
          <div class="loader">
            <img src="images/loading.gif" alt="" />
          </div>
        </div>

        <div class="wrapper">
          <div class="sidebar">
            <nav id="sidebar">
              <div id="dismiss">
                <i class="fa fa-arrow-left"></i>
              </div>

              <ul class="list-unstyled components">
                <li>
                  <a href="/">Home</a>
                </li>
                <li class="active">
                  <a href="/about">About</a>
                </li>

                <li>
                  <a href="/shop">Shop</a>
                </li>

                <li>
                  <a href="/contact">Contact Us</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div>
          <div id="content">
            <header>
              <div class="container-fluid">
                <div class="row">
                  <div class="col-md-3">
                    <div class="full">
                      <a class="logo" href="index.html">
                        <img src="logooo.png" alt="#" />
                      </a>
                    </div>
                  </div>
                  <div class="col-md-9">
                    <div class="full">
                      <div class="right_header_info"></div>
                    </div>
                  </div>
                </div>
              </div>
            </header>
          </div>
        </div>

        <div class="yellow_bg">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="title">
                  <h2>About</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div id="about" class="about">
            <div class="container">
              <div class="row">
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <div class="about_box">
                    <h2>
                      About<strong class="white"> Our Salon</strong>
                    </h2>
                    <p>
                      A hair salon is an establishment that offers professional
                      hair styling services for men and women. Hair salons offer
                      hair services including professional hair styling and hair
                      texturing. Many hair salons also offer hair coloring,
                      highlights, head and scalp treatments and formal styling
                    </p>
                    <a href="#">Read more</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <fooetr>
            <div class="footer">
              <div class="container"></div>
              <div class="copyright">
                <div class="container">
                  <p>
                    © 2019 All Rights Reserved.{" "}
                    <a href="https://html.design/"> Free Html Templates</a>
                  </p>
                </div>
              </div>
            </div>
          </fooetr>
        </div>
      </div>
    );
  }
}

export default About_Us;
