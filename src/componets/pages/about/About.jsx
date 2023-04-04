import React from "react";
import "./about.css";
import b1 from "../../../assets/b1.png";
import b2 from "../../../assets/b2.png";
import b3 from "../../../assets/b3.png";
import b4 from "../../../assets/b4.png";
import b5 from "../../../assets/b5.png";
import t1 from "../../../assets/t1.png";
import t2 from "../../../assets/t2.png";
import t3 from "../../../assets/t3.png";
import w1 from "../../../assets/w1.png";
import w2 from "../../../assets/w2.png";
import w3 from "../../../assets/w3.png";
import Banner from '../../banner/Banner'
const About = () => {
  return (
    <>
      <header className="about-header">
        <div className="abou-context-div">
          <p>About</p>
          <h1>
            We love to make great <br /> things, things that matter.
          </h1>
          <p>
            Funding handshake buyer business-to-business metrics iPad
            partnership. First mover advantage <br /> innovator success
            deployment non-disclosure.
          </p>
        </div>
      </header>
      <div className="heit-div">
        <div className="images-main-div">
          <div className="image-div">
            <div className="img-two">
              <img src={b1} alt="" />
              <img src={b2} alt="" />
            </div>
            <div>
              <img src={b3} alt="" />
            </div>
            <div className="img-two">
              <img src={b4} alt="" />
              <img src={b5} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="bout-text-dec-div">
        <p>Our story</p>
        <h1>
          Handshake infographic mass market <br /> crowdfunding iteration.
        </h1>
        <p>
          Conversion angel investor entrepreneur first mover advantage.
          Handshake infographic mass market crowdfunding iteration. Traction
          stock user experience deployment beta innovator incubator focus. Sales
          user experience branding growth hacking holy grail monetization
          conversion prototype stock network effects. Learning curve network
          effects return on investment bootstrapping business-to-consumer.{" "}
        </p>
      </div>
      <section className="our-numbers">
        <div className="main-our-div">
          <div className="text-our">
            <p>Our numbers</p>
            <h1>
              Handshake infographic mass market <br />
              crowdfunding iteration.
            </h1>
          </div>
          <div className="boxs-div">
            <div className="boxs">
              <h1>120m</h1>
              <p>Cool feature title</p>
            </div>
            <div className="boxs">
              <h1>10.000</h1>
              <p>Cool feature title</p>
            </div>
            <div className="boxs">
              <h1>240</h1>
              <p>Cool feature title</p>
            </div>
          </div>
        </div>
      </section>
      <div className="leadership-team-main-div">
        <div className="team-text">
          <p>Our team</p>
          <h1>The leadership team</h1>
          <p>
            Conversion angel investor entrepreneur first mover advantage.
            Handshake infographic mass market crowdfunding iteration. Traction
            stock user experience deployment beta innovator incubator focus.{" "}
          </p>
        </div>
        <div className="cards-main-div container">
          <div className="card-1">
            <img src={t1} alt="" />
            <h5>Michael Scott</h5>
            <p>General Manager</p>
          </div>
          <div className="card-1">
            <img src={t2} alt="" />
            <h5>Michael Scott</h5>
            <p>General Manager</p>
          </div>
          <div className="card-1">
            <img src={t3} alt="" />
            <h5>Michael Scott</h5>
            <p>General Manager</p>
          </div>
        </div>
      </div>
      <section className="things-main-div">
        <div className="text-things">
          <p>Our values</p>
          <h1>Things in we believe</h1>
          <p>
            Conversion angel investor entrepreneur first mover advantage. <br />{" "}
            Handshake infographic mass market crowdfunding iteration. Traction{" "}
            <br /> stock user experience deployment beta innovator incubator
            focus.{" "}
          </p>
        </div>
        <div className="main-cards-div">
          <div className="cards-we">
            <div>
              <img src={w1} alt="" />
            </div>
            <div className="text-we">
              <h5>We are commited.</h5>
              <p>
                Conversion angel investor entrepreneur first mover advantage.
                Handshake infographic mass market crowdfunding iteration.{" "}
              </p>
            </div>
          </div>
          <div className="cards-we">
            <div>
              <img src={w2} alt="" />
            </div>
            <div className="text-we">
              <h5>We are responsible.</h5>
              <p>
                Conversion angel investor entrepreneur first mover advantage.
                Handshake infographic mass market crowdfunding iteration.{" "}
              </p>
            </div>
          </div>
          <div className="cards-we">
            <div>
              <img src={w3} alt="" />
            </div>
            <div className="text-we">
              <h5>We aim for progress.</h5>
              <p>
                Conversion angel investor entrepreneur first mover advantage.
                Handshake infographic mass market crowdfunding iteration.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="sect-bbenr">
      <Banner/>
      </div>
    </>
  );
};

export default About;
