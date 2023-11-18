import React from 'react'
import '../Hero/Hero.css'
import Book from '../framercomponents/Book'
import BookTitle2  from '../framercomponents/BookTitle2'
import BookDescription2 from '../framercomponents/BookDescription2'
import BuyButton from '../framercomponents/BuyButton'
import ReadMore from '../framercomponents/ReadMore'

export default function Hero() {

   
  return (
    <div>
      <div>
        <div className="hero">
          <div className="hero-text">
            
            <BookTitle2/>
            <BookDescription2/>
          </div>
          <div className="buttons">
            <ReadMore/>
          <BuyButton/>
          </div>
          <div className="heropng">
            {/* <img  src="bookmockedup.png" alt="logo" /> */}
            <Book/>
          </div>
    
      </div>
    </div>
    </div>
  )
}
