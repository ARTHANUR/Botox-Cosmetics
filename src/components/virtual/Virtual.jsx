import React from 'react'
import ReactCompareImage from 'react-compare-image';

const Virtual = () => {
  return (
    <>
      <div className="virtual">
        <ReactCompareImage  leftImage="./images/before.png" rightImage = "./images/after.png"  />
      </div>
    </>
  )
}

export default Virtual
