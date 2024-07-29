import React from 'react'
import Main from '../components/Main/Main'
import "../styles/Cartpage.css"

const Cartpage = () => {
  return (
      <div className='Cartpage'>
        <Main>
            <div className="top">
                <div className="item-count">
                    <h2>Shopping Cart</h2>
                    <p>Subtotal (3 items)</p>
                </div>
                <div className="total-price">
                    <p>140,000.00</p>
                </div>
            </div>
            <div className="middle">
                <table>
                    <tr>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                    <tr>
                        <td className='cart-item'>
                            <div className="img-container">
                                <img src="../assets/product-image-4.jpg" alt="" />
                            </div>
                            <div className="item-details">
                                <span>Produced by Gabina</span>
                                <p>More story</p>
                            </div>
                        </td>
                        <td className='item-counter'>
                            <button>+</button>
                            <span>0</span>
                            <button>-</button>
                        </td>
                        <td className='price'>
                            <p>140,000.00</p>
                            <p>70,000.00 x 2</p>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
            </div>
        </Main>
      </div>
  )
}

export default Cartpage