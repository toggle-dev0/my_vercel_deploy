import React from 'react'
import "./Trending.css"
import RegularButton from '../RegularButton/RegularButton'

const Trending = (props) => {
  return (
      <div className='Trending'>
        <div className="title">{props.title}</div>
        <div className="img-container">
            <img src={props.imgSource} alt="A trending product" />
        </div>
        <div className="trending-button">
            <RegularButton name="xxtra-wide">Add to Cart</RegularButton>
        </div>
      </div>
  )
}

export default Trending