import '../assets/scss/hero-section.scss'
import poster1 from '../assets/images/main-page-img2.png' 
import poster2 from '../assets/images/main-page-img1.png'
import React from 'react';


export default function HeroSection(){
    return <>
    <section className="hero-section">
        <div className="main-page-text-wrapper">
            <h1><span>Find Movies</span>TV shows and more</h1>
        </div>
        <div className="main-page-img-wrapper">
            <div className="main-img-wrapper first-img">
                <img src={poster1} alt="poster" />
            </div>
            <div className="main-img-wrapper second-img">
                <img src={poster2} alt="poster" />
            </div> 
        </div>
    </section>
    </>
    
}