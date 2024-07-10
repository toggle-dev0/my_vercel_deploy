import React from 'react'
import Main from '../components/Main/Main'
import "../components/Main/Main.css"
import "../components/RegularButton/RegularButton.css"
import "../styles/Homepage.css"
import HeroSection from '../components/HeroSection/HeroSection.jsx'
import StarComponent from '../components/StarComponent/StarComponent.jsx'
import RegularButton from '../components/RegularButton/RegularButton.jsx'
import SocialSlider from '../components/SocialSlider/SocialSlider.jsx'
import Product from '../components/Product/Product.jsx'
import Trending from '../components/Trending/Trending.jsx'
import FlashSale from '../components/FlashSale/FlashSale.jsx'
import Footer from '../components/Footer/Footer.jsx'
import "../styles/Homepage.css"
const Homepage = () => {
  return (
    <div className='Homepage'>
    <Main>
        <HeroSection name="img-container-1" imgSource="./assets/hero-img.jpg">
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
            <RegularButton name="normal">See all collections</RegularButton>
        </div>  
        <div className="product-section">
            <Product title="Western Jacket" imgSource="./assets/product-image-1.jpg" itemStock="40" itemPrice="40,000" initialPrice="50,000"
            itemDescription="Western jacket simple, yet elegant and lov..."
            />
            <Product title="Complete Wear" imgSource="./assets/product-image-2.jpg" itemStock="20"
            itemPrice="42,000" initialPrice="70,000"
            itemDescription="A complete outfit, made from the best fabric..." 
            />    
            <Product title="Gobbama Polo" imgSource="./assets/product-image-3.jpg" itemStock="20"
            itemPrice="33,000" initialPrice="55,000"
            itemDescription="Gobbama polo, best suited with jean of..." />
        </div>
        <div className="product-section">
            <Product title="German Suit" imgSource="./assets/product-image-4.jpg" itemStock="20"
            itemPrice="45,000" initialPrice="75,000"
            itemDescription="German suit, made with the best cotton mat..." />
            <Product title="Goldboy top" imgSource="./assets/product-image-5.jpg" itemStock="20"
            itemPrice="45,000" initialPrice="75,000"
            itemDescription="Goldboy top, best worn as casual but solely for..." />
            <Product title="Blue Hoodie" imgSource="./assets/product-image-6.jpg" itemStock="20" itemPrice="45,000" initialPrice="75,000"
            itemDescription="Blue hoodie, best suit for cold weather and lon..." />
        </div>
        <HeroSection name="img-container-2" order="2"  imgSource="./assets/what-to-wear.jpg">
            <div className="hero-text">
                <span className="biggest">Wear to Wedding</span>
                <span>We give couples a perfect touch that they can use to wedding and...</span>
                <RegularButton name="xxtra-wide">See more</RegularButton>
            </div>
        </HeroSection>
        <div className='breaker'>
            <h2>Trending Collections</h2>
            <p>Saving your money for future use , <span className="all-caps">
            by shopping with us for all your affordable wears, including; classic and contemporary wears 
                </span>
            </p>
            <RegularButton name="normal">See all collections</RegularButton>
        </div>
        <div className="trending-section">
            <Trending title="Black Top" imgSource="./assets/shop-center-pic-1.png" />
            <Trending title="Round Top" imgSource="./assets/shop-center-pic-2.png" />
            <Trending title="White Top" imgSource="./assets/shop-center-pic-3.png" />
            <Trending title="Black Shirt" imgSource="./assets/shop-center-pic-4.png" />
            <Trending title="White Hoodie" imgSource="./assets/shop-center-pic-5.png" />
        </div>
        <div className="trending-section">
            <Trending title="Red Hoodie" imgSource="./assets/shop-center-pic-6.png" />
            <Trending title="Black Top" imgSource="./assets/shop-center-pic-7.png" />
            <Trending title="Blue Jean" imgSource="./assets/shop-center-pic-8.png" />
            <Trending title="Collar Hoodie" imgSource="./assets/shop-center-pic-9.png" />
            <Trending title="Black Hat" imgSource="./assets/shop-center-pic-10.png" />
        </div>
        <div className='breaker'>
            <h2>Flash Sales</h2>
            <p>
            Join the moving trend! It&apos;s the last flash sale for the year. Enjoy massive discount for some beautiful wears
            </p>
            <RegularButton name="normal">See all collections</RegularButton>
        </div>
        <div className="flash-sales-section">
            <FlashSale imgSource="./assets/flash-sales-1.jpg" title="Crispy Gown" itemStock="50"
            itemPrice="50,000" initialPrice="100,000" />
            <FlashSale imgSource="./assets/flash-sales-2.jpg" title="Crispy Gown" itemStock="50"
            itemPrice="50,000" initialPrice="100,000" />
            <FlashSale imgSource="./assets/flash-sales-3.jpg" title="Crispy Gown" itemStock="50"
            itemPrice="50,000" initialPrice="100,000" />
        </div>
    </Main>
    <div className="footer">
        <Footer />
    </div>
    </div>
  )
}

export default Homepage