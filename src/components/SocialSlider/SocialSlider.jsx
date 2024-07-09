import React from 'react'
import { Link } from 'react-router-dom'
import "./SocialSlider.css"

const SocialSlider = () => {
  return (
    <div className="SocialSlider">
        <div className="social-link">
            <Link to="https://www.fedex.com" target='_blank'>
                <img src="./assets/FedEx-logo.svg" alt="FedEx logo" />
            </Link>
        </div>
        <div className="social-link">
            <Link to="https://www.apple.com" target='_blank'>
                <img src="./assets/Apple-logo.svg" alt="Apple logo" />
            </Link>
        </div>
        <div className="social-link">
            <Link to="https://www.x.com" target='_blank'>
                <img src="./assets/X-logo.svg" alt="X logo" />
            </Link>
        </div>
        <div className="social-link">
            <Link to="https://www.redhat.com" target='_blank'>
                <img src="./assets/RedHat-logo.svg" alt="RedHat logo" />
            </Link>
        </div>
    </div>
  )
}

export default SocialSlider