import React from 'react'
import './Hero.css'
import Book from '../framercomponents/Book'
import BookTitle  from '../framercomponents/BookTitle'
import BookDescription from '../framercomponents/BookDescription'
import BuyButton from '../framercomponents/BuyButton'
import ReadMore from '../framercomponents/ReadMore'

export default function Hero() {
  return (
    <div>
      <div>
        <div className="hero">
          <div className="hero-text">
            <h2>Master Android Development</h2>
            <BookTitle/>
            <BookDescription/>
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
