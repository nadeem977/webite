import React from "react";
import "./header.css";
import '../../App.css'
import chart from "../../assets/chart.png";
import Logo1 from "../../assets/Log.png";
import Logo2 from "../../assets/Logo 1.png";
import Logo3 from "../../assets/Logo 2.png";
import Logo4 from "../../assets/Logo 3.png";
import Logo5 from "../../assets/Logo 4.png";

const Header = () => {
  return (
    <header>
      <div className="header-main-div">
        <div className="header-text">
          <h1>
            Save time by building fast <br />
            with Boldo Template
          </h1>
          <p>
            Funding handshake buyer business-to-business metrics iPad
            partnership. First <br />
            mover advantage innovator success deployment non-disclosure.
          </p>
          <span>
            <button className="btn buybtn">Buy template</button>
            <button className="btn expbtn">Explore</button>
          </span>
        </div>
        <div className="header-img">
          <img src={chart} alt="" className="chart-img" />
          <span className="img-abso" />
        </div>
      </div>
      <div className="imades-lodo-div">
        <img src={Logo1} alt="" />
        <img src={Logo2} alt="" />
        <img src={Logo3} alt="" />
        <img src={Logo4} alt="" />
        <img src={Logo5} alt="" />
      </div>
    </header>
  );
};

export default Header;
