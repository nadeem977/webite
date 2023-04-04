import React from "react";
import "./catagory.css";
import { Categories } from "../../assets/data/data";
const Catagorys = () => {
  return (
    <>
      <div className="main-div">
        <div className="text-div-ctry">
          <p>Our Blog</p>
          <h1>
            Value proposition accelerator product <br /> management venture
          </h1>
        </div>
        <div className="main-catogary-div">
          {Categories.map((items) => (
            <div className="blog-div" key={items.id}>
              <img src={items.image} alt="" />
              <div className="text-cty my-2">
                <div className="spn-text">
                  <p>{items.ctr}</p>
                  <small>{items.sma}</small>
                </div>
                <p className="text-dec">{items.description}</p>
                <div className="logo-name">
                  <div>
                    <img src={items.logo} alt="" />
                  </div>
                  <h6>{items.name}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center my-5">
          <button className="btn-load">Load more</button>
        </div>
      </div>
    </>
  );
};

export default Catagorys;
