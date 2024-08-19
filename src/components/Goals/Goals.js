import React from 'react'
import "./goals.css"
import Image from 'next/image';

import { TbFlag3 } from "react-icons/tb";

const Goals = () => {
  return (
    <div>
        <section className='goals'>

            <div className='heading'>
                <p><TbFlag3 /></p>
                <h2>Hit your health goals in 1-2-3</h2>
            </div>

            <div className='trackFood'>

                <div className='trackImg'>
                    <Image src="/track-food-large.webp" width={300} height={300} alt='track food image'/>
                </div>

                <div className='trackText'>
                    <h1>1</h1>
                    <h2>Track food, fitness & fasting</h2>
                    <p>Tracking calories and macros is easy with our barcode scanner and device integration.</p>
                </div>

            </div>
        
        
        </section>



    </div>
  )
}

export default Goals
