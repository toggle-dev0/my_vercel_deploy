import React from 'react'
import Main from '../components/Main/Main'
import "../components/Main/Main.css"
// import Section from "../components/Section/Section.jsx"
// import "../components/Section/Section.css"
import "../styles/Homepage.css"
// import Footer from "../components/Footer/Footer.jsx"
// import "../components/Footer/Footer.css"
import HeroSection from '../components/HeroSection/HeroSection.jsx'
import StarComponent from '../components/StarComponent/StarComponent.jsx'
import RegularButton from '../components/RegularButton/RegularButton.jsx'
// import LayOnImage from '../components/LayOnImage/LayOnImage.jsx'

const Homepage = () => {
  return (
    <>
    <Main>
        <HeroSection imgSource="./assets/hero-img.jpg">
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
                    <RegularButton>Buy Now</RegularButton>
                </div>
            </div>
        </HeroSection>
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