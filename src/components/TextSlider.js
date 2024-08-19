import React from 'react'
import { useCallback, useEffect, useRef, useState } from "react";



const slideStyles = {
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const sliderStyles = {
  position: "relative",
  height: "100%",
};

const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
};

const dotStyle = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "20px",
};

const slidesContainerStyles = {
  display: "flex",
  height: "100%",
  transition: "transform ease-out 0.3s",
};

const slidesContainerOverflowStyles = {
  overflow: "hidden",
  height: "100%",
};

const TextSlider = ({ slides, parentWidth }) => {


 
  // const TextSlider = () => {
    const timerRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const goToNext = useCallback(() => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }, [currentIndex, slides]);
  
    const goToSlide = (slideIndex) => {
      setCurrentIndex(slideIndex);
    };
    const getSlideStylesWithBackground = (slideIndex) => ({
      ...slideStyles,
      // backgroundImage: `${slides[slideIndex].url})`,
      width: `${parentWidth}px`,
    });
    const getSlidesContainerStylesWithWidth = () => ({
      ...slidesContainerStyles,
      width: parentWidth * slides.length,
      transform: `translateX(${-(currentIndex * parentWidth)}px)`,
    });
  
    useEffect(() => {
      if (timerRef.current) {
        console.log(timerRef.current);
        clearTimeout(timerRef.current);
      }
      timerRef.current = setTimeout(() => {
        goToNext();
      }, 2000);
  
      return () => clearTimeout(timerRef.current);
    }, [goToNext]);
  
   

  // console.log(reviews)

  return (
    
    <div>
      
      {/* {reviews.map(=>(<p></p>))  }  */}

      {/* <button className='rounded-full border-2  border-gray-500 bg-gray-500 mx-1  w-2.5 h-2.5'> </button>
      <button className='rounded-full border-2  border-gray-500 bg-gray-500 mx-1  w-2.5 h-2.5'> </button>
      <button className='rounded-full border-2  border-gray-500 bg-gray-500 mx-1  w-2.5 h-2.5'> </button>
      <button className='rounded-full border-2  border-gray-500 bg-gray-500 mx-1  w-2.5 h-2.5'> </button>
      <button className='rounded-full border-2  border-gray-500 bg-gray-500 mx-1  w-2.5 h-2.5'> </button>
      <button className='rounded-full border-2  border-gray-500 bg-gray-500 mx-1  w-2.5 h-2.5'> </button> */}


      <div style={sliderStyles}>
        <div>
          <div style={leftArrowStyles}>❰</div>
          <div style={rightArrowStyles}>❱</div>
        </div>

        <div style={slidesContainerOverflowStyles}>
          <div style={getSlidesContainerStylesWithWidth()}>
            {slides.map((_, slideIndex) => (
              <div
                key={slideIndex}
                style={getSlideStylesWithBackground(slideIndex)}
              >
                <p>{slides[slideIndex].note} </p>
                <p>{slides[slideIndex].person} </p>
              </div>
            ))}
          </div>
        </div>

        <div style={dotsContainerStyles}>
          {slides.map((slide, slideIndex) => (
            <div
              style={dotStyle}
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
            >
              ●
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

 

export default TextSlider
