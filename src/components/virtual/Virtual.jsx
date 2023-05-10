import React from 'react'
import ReactCompareImage from 'react-compare-image';
import "./Virtual.css"

const Virtual = () => {
  return (
    <>

    <div className="virtual">
        <div className="left">
            <h1>VIRTUAL TRY-ON</h1>
            <p>SAY YES TO YOUR ULTIMATE MAKEOVER</p>
            <h3>Try Now!</h3>
            <img src="./images/shade.png" alt="" />
        </div>
      <div className="right">
        <ReactCompareImage  leftImage="./images/before.png" rightImage = "./images/after.png"  />
      </div>
    </div>
    </>
  )
}

export default Virtual
