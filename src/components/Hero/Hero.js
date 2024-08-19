"use client"
import React from 'react'
import "./hero.css"
import Image from 'next/image'
import TextSlider from '../TextSlider';


import { IoStarSharp } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";

const Hero = () => {

    const slides = [

        {note : "“Good for tracking calories and macros with a huge database of food.”", person: "Iain M." },
        {note : "“Friendly, easy-to-use app that keeps me accountable.”", person: "Dinah L." },
        {note : "“Can’t lose weight and stay on track without it.”", person: "Jennie S."},
        {note : "“Love this app. It keeps me on track with my nutritional goals.”", person: "Annette B."},
        {note : "“Not only are the tools super helpful, the customer service is insanely awesome!”", person: "Laura K."},
        {note : "“Helped me get moving on my goals and tracking my weight loss and bodybuilding.”", person: "Jason L."},

    ];
    const containerStyles = {
        width: "500px",
        height: "280px",
        margin: "0 auto",
    };
    const width = {
        width: "100vw",
        height: "20px",

    }

  return (
    <div>

        <div className="hero">

            <div className="heroRight">

                <p>#1 nutrution tracking app</p>

                <h1><b>Reach your goals </b>with MyFitnessPal</h1>

                <p>Build healthy habits with the all-in-one food, exercise, and calorie tracker.</p>

                <button>START TODAY <span className='heroarrow'><IoIosArrowForward /></span></button>
                
            </div>

            <div className="heroLeft ">

                <Image src="/hero-phone-large.webp" width="260" height="260" alt="marve" />

                
            </div>


        </div>

        <div className='reviews'>

            <div className='stars'>
                <IoStarSharp/>
                <IoStarSharp/>
                <IoStarSharp/>
                <IoStarSharp/>
                <IoStarSharp/>
            </div>

            <h2>3.7 Million 5-Star Reviews</h2>

            {/* <div className='notes two'>
                <p>“Friendly, easy-to-use app that keeps me accountable.”</p>
                <p className='smallP'>Dinah L.</p>
            </div> */}

            <div styles={containerStyles}>
                <TextSlider slides={slides} parentWidth={1300}/>
            </div>
            

            {/* <div className='notes one'>
                <p>“Good for tracking calories and macros with a huge database of food.”</p>
                <p className='smallP'>Dinah L.</p>
            </div> */}

            {/* <div className='notes tri'>
                <p>“Friendly, easy-to-use app that keeps me accountable.”</p>
                <p className='smallP'>Dinah L.</p>
            </div> */}

            {/* <div className='notes four'>
                <p>“Friendly, easy-to-use app that keeps me accountable.”</p>
                <p className='smallP'>Dinah L.</p>
            </div> */}

            {/* <div className='notes five'>
                <p>“Friendly, easy-to-use app that keeps me accountable.”</p>
                <p className='smallP'>Dinah L.</p>
            </div> */}

            {/* <div className='notes six'>
                <p>“Friendly, easy-to-use app that keeps me accountable.”</p>
                <p className='smallP'>Dinah L.</p>
            </div> */}

            {/* <p>[notes one , notes two notes tri, note four, note five, note six]</p> */}

            
        </div>
    </div>
  )
}

export default Hero
