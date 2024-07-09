import React from 'react'
import StarComponent from '../StarComponent/StarComponent'
import RegularButton from '../RegularButton/RegularButton'
import "./Product.css"

const Product = (props) => {
  return (
      <div className='Product'>
            <div className="product-title">
                <h2>{props.title}</h2>
            </div>
        <div className="product-info">
            <div className="product-img-container">
                <img src={props.imgSource} alt="Product Representation" />
            </div>
            <div className="product-details">
                <p className="stock">{props.itemStock} items left</p>
                <div className="price-box">
                    <span className="price">&#8358;{props.itemPrice}</span>
                    <span className="discount">&minus;40&#37;</span>
                </div>
                <p className='initial-price'>&#8358;{props.initialPrice}</p>
                <StarComponent />
                <p className='description'>{props.itemDescription}</p>
            </div>

        </div>
        <div className="product-buttons">
            <RegularButton name="xtra-wide">Buy Now</RegularButton>
            <RegularButton name="invert">Add to cart</RegularButton>
        </div>
      </div>
  )
}

export default Product