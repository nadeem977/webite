import React from 'react'
import './card.css'
const Card = (props) => {
  return (
   <>
   <div className='mycard'>
   <p className='text-p'>{props.text}</p>
    <div className='img-text'>
   <div>
   <img src={props.img} alt="" />
   </div>
      <div className='title'>
       <p>{props.title}</p>
       <p>{props.sma}</p>
      </div>
    </div>
   </div>
   </>
  )
}

export default Card