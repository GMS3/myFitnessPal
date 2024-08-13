import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <nav>
      
      {/* UPPER NAV */}
      <div className='upperNav'>
        <div className='upside'>
          
        <h3><b>myfitnesspal</b></h3>

        <button className='specialBtn'><b>START TODAY </b></button>

        </div>
        

      </div>

      {/* LOWER NAV */}
      <div className='lowerNav'>

        <div className='buttons '>

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
