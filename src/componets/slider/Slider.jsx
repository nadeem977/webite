import React, { useRef } from "react";
import Card from "./Card";
import "./slider.css";
import {cards} from "../../assets/data/data";

const Slider = () => {
  const productContainerRef = useRef(null);

  const handlePrevClick = () => {
    if (productContainerRef.current) {
      const width = productContainerRef.current.clientWidth;
      productContainerRef.current.scrollLeft -= width;
    }
  };

  const handleNextClick = () => {
    if (productContainerRef.current) {
      const width = productContainerRef.current.clientWidth;
      productContainerRef.current.scrollLeft += width;
    }
  };

  return (
    <>

<div className="butns-div">
        <button className="prev-btn btns" onClick={handlePrevClick}>
          <i className="bi bi-arrow-left"></i>
        </button>
        <button className="next-btn btns" onClick={handleNextClick}>
          <i className="bi bi-arrow-right"></i>
        </button>
      </div>
       <div className="product-carousel">
      <div className="product-container" ref={productContainerRef}>
       {cards.map((data) =>(
         <Card key={data.id}
         img={data.image} 
         text={data.description}
         title={data.name}
         sma={data.sma}
         />
       ))}
          
      </div>
    </div>
    
    </>
 
  );
};

export default Slider;
