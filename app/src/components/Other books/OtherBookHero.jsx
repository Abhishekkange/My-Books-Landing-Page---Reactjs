import React from 'react'
import '../Hero/Hero2.css'

import BookTitle2  from '../framercomponents/BookTitle2'
import BookDescription2 from '../framercomponents/BookDescription2'
import BuyButton from '../framercomponents/BuyButton'
import ReadMore from '../framercomponents/ReadMore'

export default function Hero() {

   
  return (
    <div>
      <div>
        <div className="heros">
          <div className="hero-text">
            
            <BookTitle2/>
            <BookDescription2/>
          </div>
          <div className="buttons">
            <ReadMore/>
          <BuyButton/>
          </div>
         
    
      </div>
    </div>
    </div>
  )
}
