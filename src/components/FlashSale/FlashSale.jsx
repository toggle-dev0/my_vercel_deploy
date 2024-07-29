import React from 'react'
import "./FlashSale.css"
import "../Product/Product.css"
import RegularButton from '../RegularButton/RegularButton'

const FlashSale = (props) => {
  return (
      <div className='FlashSale'>
        <div className="details">
            <div className='product-title'>
                <h2>{props.title}</h2>
            </div>
            <p className="stock">{props.itemStock} items left</p>
                <div className="price-box">
                    <span className="price">&#8358;{props.itemPrice}</span>
                    <span className="discount">&minus;{props.discount}&#37;</span>
                </div>
            <p className='initial-price'>{props.initialPrice}</p>
            <div className="flash-sale-buttons">
                <RegularButton name="xxtra-wide">Buy Now</RegularButton>
                <RegularButton name="xxtra-wide-invert">Add to cart</RegularButton>
            </div>
        </div>
        <div className="img-rep">
            <img src={props.imgSource} alt="Flash Sale" />
        </div>
      </div>
  )
}

export default FlashSale