import React from "react"
import "./Header.css"
import { Outlet, Link } from "react-router-dom"

const Header = () => {
  return (
    <>
      <div className="Header">
        <div className="ad-at-top">
          <span>Join the moving trend!!! We are offering a massive promo for your wears this festive season...</span>
        </div>
        <nav>
            <ul className="nav-links">
                <li><Link to="">Men</Link></li>
                <li><Link to="">Women</Link></li>
                <li><Link to="">Kids</Link></li>
                <li><Link to="">Trending</Link></li>
            </ul>
            <div className="logo">
              <span>VirgoWears</span>
            </div>
            <div className="utils">
              <div className="search-bar">
                <div className="search-icon">
                  <img src="./assets/search-icon.svg" alt="Seacrh icon" />
                </div>
                <div className="search-box">
                  <input type="search" placeholder="Search" />
                </div>
              </div>
                <div className="cart-container">
                  <div className="cart">
                    <Link to="/Cartpage">
                      <img src="./assets/blue-cart.svg" alt="Blue cart icon" />
                    </Link>
                  </div>
                  <span>Cart</span>
                </div>
                <div className="profile">
                  <img src="./assets/profile-pic-icon.svg" alt="A profile icon" />
                </div>
            </div>
        </nav>
      </div>
        <Outlet />
    </>
  )
}

export default Header