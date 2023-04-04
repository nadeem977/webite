import React from 'react'
import './services.css'
import img from "../../../assets/ser.png"
import bch from "../../../assets/bch.png"
import  {services} from "../../../assets/data/data"
import Banner from "../..//banner/Banner"
const Servisec = () => {
  return (
   <>
  <header className='serv-header'>
   <div className="text-serv">
   <p>Blog</p>
    <h1>Thoughts and words</h1>
   </div>
  <div className="servs-main-div">
    <img src={img} alt="" />
    <div>
     <span className='spn-ser'>
     <p>Category</p>
      <small>November 22, 2021</small>
     </span>
      <h1>Pitch termsheet backing <br /> validation focus release.</h1>
      <span className='spn-ser'>
        <img src={bch} alt="" />
         <p>Chandler Bing</p></span>
    </div>
    </div>
  </header>
   <section>
    <div className="cards-main-serv">
    {services.map((data)=>(
      <div key={data.id} className="card-serv">
        <img src={data.ls} alt="" />
       <span className='spn-de'>
        <p>{data.ctr}</p>
        <small>{data.sml}</small>
       </span>
        <p>{data.description}</p>
        <span className='spn-de'>
         <img src={data.image} alt="" />
         <p>{data.name}</p>
       </span>
      </div>
    ))}
    </div>
   </section>
   <section className='banner-serv'> 
    <Banner/>
   </section>
   </>
  )
}

export default Servisec