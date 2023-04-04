import React from 'react'
import'./Banner.css'

const Banner = () => {
  return (
    <div className="Bnanner-div">
      <div className="text-bnr">
        <h1>An enterprise template to ramp <br /> up your company website</h1>
      </div>
      <div className='form-input'>
        <input type="email" placeholder='Your email address' />
        <button className='btn-start'>Start now</button>
        </div>
    </div>
  )
}

export default Banner