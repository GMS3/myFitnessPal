"use client"

import React, { useEffect, useState} from 'react'
import './navbar.css'
import { IoIosArrowForward } from "react-icons/io";

const Navbar = () => {

  // const [ isFixed, setIsFixed ] = useState(false)
  // const [ handle, setHandle ] = useState(0)
  // const scrollThreshHold = 100;
  
  
  // function myFunction() {
     
  // }
  // window.onScroll = function() {myFunction()}


  // useEffect(() => {
  //   const handleScroll = () => {
  //         if(window.scrollY >= scrollThreshHold) {
  //           const position = window.scrollY;
  //           console.log(position)     
  //           setIsFixed(true)      
  //         }
  //      };

  //      window.addEventListener("scroll", handleScroll); 

  //     //  if(window.scrollY <= scrollThreshHold) {
  //        return() => {
  //          window.removeEventListener("scroll", handleScroll)   
  //       //  }
  //     }
      
  // }, []);
  
  
  return (
    // <nav className= {`${isFixed ? "fixed" : ""} upperNav`}>
    <nav className= "upperNav">
      
      {/* UPPER NAV */}
      <div  >

        <div className='upside'>
          
          <h3><b>myfitnesspal</b></h3>

          <button className='specialBtn'><b>START TODAY </b><span className='arrow'><IoIosArrowForward /></span></button>

        </div>
        

      </div>

      {/* LOWER NAV */}
      <div className='lowerNav'>

        <div className={"buttons"}>

          <button><b>Reviews</b></button>
          <button><b>How It Works</b></button>
          <button><b>Apps</b></button>
          <button><b>Our Philosophy</b></button>

        </div>
        
      </div>


    </nav>
  )
}

export default Navbar
