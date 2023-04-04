import React from "react";
import "./Footer.css";
import logo from '../../assets/Log.png';
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="main-div-footer mt-5">
          <div className="container-fluid">
            <div className="row m-auto">
              <div className="box first-div">
               <div>
               <img src={logo} alt="" />
               </div>
                <p>Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.</p>
                <p>
                All rights reserved.
                </p>
              </div>
              <div className="box">
                <h6>Landings</h6>
                <Link>Home</Link>
                <Link>Products</Link>
                <Link>Services</Link>
              </div>
              <div className="box">
              <h6>Landings</h6>
                <Link>Home</Link>
                <Link>Products</Link>
                <Link>Services</Link>
              </div>
              <div className="box">
              <h6>Landings</h6>
                <Link>Home</Link>
                <Link>Products</Link>
                <Link>Services</Link>
              </div>
              
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="footer-copyright text-center py-3">
                  <span>Copyright © 2021</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
