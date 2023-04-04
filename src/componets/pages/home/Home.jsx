import React from "react";
import Header from "../../header/Header";
import "./home.css";
import cart1 from "../../../assets/car-1.png";
import cart2 from "../../../assets/card-2.png";
import cart3 from "../../../assets/card-3.png";
import boy from "../../../assets/boy.png";
import girl from "../../../assets/girl.png";
import tik from "../../../assets/tik.png";
import Slider from "../../slider/Slider";
import team from "../../../assets/team.png";
import Catagorys from "../../Catacorys/Catagorys";
import Banner from "../../banner/Banner";
import '../../../App.css'

const Home = () => {
  return (
    <>
      <Header />
      <div className="services">
        <div className="text-div">
          <p>Our services</p>
          <h1>
            Handshake infographic mass market <br />
            crowdfunding iteration.
          </h1>
        </div>
        <div className="cards-main-div">
          <div className="card-1">
            <img src={cart1} alt="" />
            <p>Cool feature title</p>
            <div className="spn-card">
              <h6>Explore page</h6>
              <i className="bi bi-arrow-up-right"></i>
            </div>
          </div>
          <div className="card-1">
            <img src={cart2} alt="" />
            <p>Even cooler feature</p>
            <div className="spn-card">
              <h6>Explore page</h6>
              <i className="bi bi-arrow-up-right"></i>
            </div>
          </div>
          <div className="card-1">
            <img src={cart3} alt="" />
            <p>Cool feature title</p>
            <div className="spn-card">
              <h6>Explore page</h6>
              <i className="bi bi-arrow-up-right"></i>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="connect-customers-div">
          <div className="connect-div">
            <div className="image-div-cont">
              <img src={boy} alt="" />
            </div>
            <div className="text-cont">
              <span>
                <h1>
                  We connect our customers <br /> with the best, and help them{" "}
                  <br />
                  keep up-and stay open.
                </h1>

                <span className="cont-spn">
                  <div>
                    <img src={tik} alt="" />
                  </div>
                  <p>We connect our customers with the best.</p>
                </span>

                <span className="cont-spn">
                  <div>
                    <img src={tik} alt="" />
                  </div>
                  <p>Advisor success customer launch party.</p>
                </span>

                <span className="cont-spn">
                  <div>
                    <img src={tik} alt="" />
                  </div>
                  <p>Business-to-consumer long tail.</p>
                </span>

                <button className="startbtn">Start now</button>
              </span>
            </div>
          </div>
        </div>

        <div className="connect-customers-div">
          <div className="connect-div cont-2">
            <div className="text-cont">
              <span>
                <h1>
                  We connect our customers <br /> with the best, and help them{" "}
                  <br />
                  keep up-and stay open.
                </h1>

                <span className="cont-spn colo-spn">
                  <i className="bi bi-layout-wtf"></i>
                  <p>We connect our customers with the best.</p>
                </span>

                <span className="cont-spn colo-spn">
                  <i className="bi bi-chat-quote"></i>
                  <p>Advisor success customer launch party.</p>
                </span>

                <span className="cont-spn colo-spn">
                  <i className="bi bi-brightness-low"></i>
                  <p>Business-to-consumer long tail.</p>
                </span>
              </span>
            </div>
            <div className="image-div-cont">
              <img src={girl} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="sliders-section">
        <div className="main-div-slider">
          <h1>
            An enterprise template to ramp <br /> up your company website
          </h1>
          <Slider />
        </div>
      </section>
      <section>
        <div className="services-team">
          <div className="img-div">
            <img src={team} alt="" />
          </div>
          <div className="text-team-div">
            <h1>
              We connect our customers <br /> with the best, and help them{" "}
              <br /> keep up-and stay open.
            </h1>
            <div className="accordiunts">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      We connect our customers with the best?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong>This is the second item's accordion body.</strong>{" "}
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It's also worth noting that just about any HTML
                      can go within the <code>.accordion-body</code>, though the
                      transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Android research & development rockstar?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong>This is the third item's accordion body.</strong>{" "}
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It's also worth noting that just about any HTML
                      can go within the <code>.accordion-body</code>, though the
                      transition does limit overflow.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Catagorys />
      </section>
      <section>
        <Banner/>
      </section>
    </>
  );
};

export default Home;
