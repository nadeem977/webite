import React from "react";
import "./blog.css";
import "../about/about.css";
import py from "../../../assets/py.png";
import crd from "../../../assets/3crd.png";
import de from "../../../assets/de.png";
import Banner from "../../banner/Banner";
const Blog = () => {
  return (
    <>
      <header className="blog-header">
        <div className="header-text-div">
          <span>
            <p>Blog</p>
            <h1>
              We love to make great <br /> things, things that matter.
            </h1>
          </span>
          <p>
            Funding handshake buyer business-to-business metrics iPad <br />
            partnership. First mover advantage innovator success <br />
            deployment non-disclosure.
          </p>
        </div>
      </header>
      <section
        className="our-numbers"
        style={{ background: "white", color: "#0A2640" }}
      >
        <div className="main-our-div">
          <div className="text-our">
            <p>Our numbers</p>
            <h1 style={{ background: "white", color: "#0A2640" }}>
              Handshake infographic mass market <br />
              crowdfunding iteration.
            </h1>
          </div>
          <div className="boxs-div py-4">
            <div className="boxs">
              <h1 style={{ background: "white", color: "#0A2640" }}>120m</h1>
              <p style={{ background: "white", color: "#0A2640" }}>
                Cool feature title
              </p>
            </div>
            <div className="boxs">
              <h1 style={{ background: "white", color: "#0A2640" }}>10.000</h1>
              <p style={{ background: "white", color: "#0A2640" }}>
                Cool feature title
              </p>
            </div>
            <div className="boxs">
              <h1 style={{ background: "white", color: "#0A2640" }}>240</h1>
              <p style={{ background: "white", color: "#0A2640" }}>
                Cool feature title
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="texc-main-blog">
        <div className="text-csec-blog">
          <p>Our story</p>
          <h1>
            Handshake infographic mass market <br /> crowdfunding iteration.
          </h1>
          <p>
            Conversion angel investor entrepreneur first mover advantage.
            Handshake infographic mass market crowdfunding iteration. Traction
            stock user experience deployment beta innovator incubator focus.
            Sales user experience branding growth hacking holy grail
            monetization conversion prototype stock network effects. Learning
            curve network effects return on investment bootstrapping
            business-to-consumer.{" "}
          </p>
        </div>
      </section>
      <section className="container p-5">
        <div className="text-card-sec-blog">
          <p>Our team</p>
          <h1>The people behind the work</h1>
          <p>
            Conversion angel investor entrepreneur first mover advantage.
            Handshake infographic mass market crowdfunding iteration. Traction
            stock user experience deployment beta innovator incubator focus.{" "}
          </p>
        </div>
        <div className="main-cards-blog">
          <div className="card-blogs">
            <img src={crd} alt="" />
            <div>
              <h1>Michael Scott</h1>
              <p>General Manager</p>
            </div>
          </div>
          <div className="card-blogs">
            <img src={crd} alt="" />
            <div>
              <h1>Michael Scott</h1>
              <p>General Manager</p>
            </div>
          </div>
          <div className="card-blogs">
            <img src={crd} alt="" />
            <div>
              <h1>Michael Scott</h1>
              <p>General Manager</p>
            </div>
          </div>
        </div>

        <div className="main-blogs-card-div">
          <div className="cards-de">
            <img src={de} alt="" />
            <div>
              <h1>Dwight Schrute</h1>
              <p>General Manager</p>
            </div>
          </div>
          <div className="cards-de">
            <img src={py} alt="" />
            <div>
              <h1>Dwight Schrute</h1>
              <p>General Manager</p>
            </div>
          </div>{" "}
          <div className="cards-de">
            <img src={py} alt="" />
            <div>
              <h1>Dwight Schrute</h1>
              <p>General Manager</p>
            </div>
          </div>{" "}
          <div className="cards-de">
            <img src={de} alt="" />
            <div>
              <h1>Dwight Schrute</h1>
              <p>General Manager</p>
            </div>
          </div>
        </div>
      </section>
      <section className="sec-commited">
        <div className="blog-commited">
          <div className="blog-title">
            <p>Our Blog</p>
            <h1>
              Value proposition accelerator product <br /> management venture
            </h1>
          </div>

          <div className="commit-text">
            <h1>
              We are <span>commited.</span>
            </h1>
            <p>
              Conversion angel investor entrepreneur first mover <br />{" "}
              advantage. Handshake infographic mass market <br /> crowdfunding
              iteration.
            </p>
          </div>
          <div className="commit-text">
            <h1>
              We are <span>commited.</span>
            </h1>
            <p>
              Conversion angel investor entrepreneur first mover <br />{" "}
              advantage. Handshake infographic mass market <br /> crowdfunding
              iteration.
            </p>
          </div>
          <div className="commit-text">
            <h1>
              We are <span>commited.</span>
            </h1>
            <p>
              Conversion angel investor entrepreneur first mover <br />{" "}
              advantage. Handshake infographic mass market <br /> crowdfunding
              iteration.
            </p>
          </div>
        </div>
      </section>
      <section className="banr-sec">
        <Banner />
      </section>
    </>
  );
};

export default Blog;
