import React from "react"
import "./Header.css"
import { Outlet, Link } from "react-router-dom"

const Header = () => {
  return (
    <>
        <div className="ad-at-top">
          <span>Join the moving trend!!! We are offering a massive promo for your wears this festive season...</span>
        </div>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="#">About</Link></li>
                <li><Link to="#">Layout</Link></li>
            </ul>
        </nav>
        <Outlet />
    </>
  )
}

export default Header