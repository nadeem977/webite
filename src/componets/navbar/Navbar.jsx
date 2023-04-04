
import { useLocation } from "react-router-dom";
import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/Log.png";
import bol from "../../assets/bol.png";
const Navbar = () => {

  const loc = useLocation();


  return (
    <>
      <section
        className={`navbar-section py-3 ${loc.pathname==="/Blog"?"Blog-d":"nan"}`}
        style={{ background: loc.pathname === "/About" ? "#0A2640" : "white" }}>
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <a className="navbar-brand" href="/Home">
              <img src={loc.pathname === "/About" ? bol : Logo} alt="" /></a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className={`  ${loc.pathname==="/About"? "bi bi-list":"navbar-toggler-icon"}`}></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    to="/"
                    className="nav-link "
                    style={{
                      color: loc.pathname === "/About" ? "white" : "#0A2640",
                    }}>
                    Product
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="About"
                    className="nav-link"
                    style={{
                      color: loc.pathname === "/About"  ? "white" : "#0A2640",
                    }}>
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="Blog"
                    className="nav-link"
                    style={{
                      color: loc.pathname === "/About"  ? "white" : "#0A2640",
                    }}>
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="Servisec"
                    className="nav-link"
                    style={{
                      color: loc.pathname === "/About"  ? "white" : "#0A2640",
                    }}>
                    Blog
                  </Link>
                </li>
                <li
                  className="nav-item login"
                  style={{
                    border:
                    loc.pathname === "/About" 
                        ? "1px solid white"
                        : "1px solid #0A2640",
                  }}>
                  <Link
                    to="/"
                    className="nav-link link"
                    style={{
                      color: loc.pathname === "/About"  ? "white" : "#0A2640",
                    }}>
                    Log In
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
