import React from 'react'
import "./LayOnImage.css"

const LayOnImage = (props) => {
  return (
    <div className="LayOnImage">
        {props.children}
    </div>
  )
}

export default LayOnImage