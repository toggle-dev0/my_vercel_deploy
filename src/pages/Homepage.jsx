import React from 'react'
import Main from '../components/Main/Main'
import "../components/Main/Main.css"
import "../components/RegularButton/RegularButton.css"
// import Section from "../components/Section/Section.jsx"
// import "../components/Section/Section.css"
import "../styles/Homepage.css"
// import Footer from "../components/Footer/Footer.jsx"
// import "../components/Footer/Footer.css"
import HeroSection from '../components/HeroSection/HeroSection.jsx'
import StarComponent from '../components/StarComponent/StarComponent.jsx'
import RegularButton from '../components/RegularButton/RegularButton.jsx'
import SocialSlider from '../components/SocialSlider/SocialSlider.jsx'
import Product from '../components/Product/Product.jsx'
// import LayOnImage from '../components/LayOnImage/LayOnImage.jsx'
const Homepage = () => {
  return (
    <>
    <Main>
        <HeroSection name="img-container-1" imgSource="./assets/hero-img.jpg">
        {/* <LayOnImage>
            Lorem ipsum dolor sit amet.
        </LayOnImage> */}
            <div className="hero-text">
                <span className='bigger'>Brown Cardigan</span>
                <span className="big">Nigerian Made</span>
                <div className="rating-container">
                    <StarComponent />
                    <span>4.5(530)</span>
                </div>
                <div className="features">
                    <ul>
                        <li>User friendly</li>
                        <li>Durable</li>
                        <li>Long lasting</li>
                        <li>Affordable</li>
                        <li>Unique</li>
                    </ul>
                    <div>
                        <RegularButton name="wide">Buy Now</RegularButton>
                    </div>
                </div>
            </div>
        </HeroSection>
        <SocialSlider />

        <div className='breaker'>
            <h2>New Collections</h2>
            <p>Saving your money for future use , <span className="all-caps">
            by shopping with us for all your affordable wears, including; classic and contemporary wears 
                </span>
            </p>
            <RegularButton>See all collections</RegularButton>
        </div>  
        <div className="product-section">
            <Product title="Western Jacket" imgSource="./assets/product-image-1.jpg" itemStock="40 items left" itemPrice="40,000" itemDiscount="40" initialPrice="50,000"
            itemDescription="Western jacket simple, yet elegant and lov..."
            />
            <Product title="Complete Wear" imgSource="./assets/product-image-2.jpg" itemStock="40 items left" />
            <Product title="Gobbama Polo" imgSource="./assets/product-image-3.jpg" itemStock="40 items left" />
        </div>
        <div className="product-section">
            <Product title="German Suit" imgSource="./assets/product-image-4.jpg" itemStock="40 items left" />
            <Product title="Goldboy top" imgSource="./assets/product-image-5.jpg" itemStock="40 items left" />
            <Product title="Blue Hoodie" imgSource="./assets/product-image-6.jpg" itemStock="40 items left" />
        </div>
        {/* <HeroSection order="2"  imgSource="./assets/what-to-wear.jpg">
            <div className="hero-text">
                <span className="bigger">Wear to Wedding</span>
            </div>
        </HeroSection> */}

        {/* <Section>
            <div className="Section-image">

            </div>
            <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium ipsa
            quisquam optio omnis modi nemo, excepturi necessitatibus molestiae
            exercitationem est eaque maxime minus nihil maiores tempore ea eligendi
            quibusdam eum facilis! Dignissimos impedit placeat fugiat.
            </p>
        </Section> */}
    </Main>
    {/* <Footer /> */}
    </>
  )
}

export default Homepage