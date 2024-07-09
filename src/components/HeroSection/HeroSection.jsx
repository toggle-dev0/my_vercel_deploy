import React from 'react'
import "./HeroSection.css"

const HeroSection = (props) => {
  return (
    <div className="HeroSection">
        <div className={props.name} style={{order: props.order}}>
            <img src={props.imgSource}style={{width: 100 + '%'}} alt="Hero" />
        </div>
        {props.children}
    </div>
  )
}

export default HeroSection