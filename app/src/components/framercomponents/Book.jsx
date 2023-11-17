import React from 'react';
import { motion } from 'framer-motion';
import '../framercomponents/book.css'

const FloatingImage = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <motion.img
        src="bookmockedup.png" // Replace with your image URL
        alt="Floating Image"
        style={{ width: '420px', height: '550px' }}
        initial={{ y: 0 }} // Initial position of the image
        animate={{ y: [0, -30, 0] }} // Animation to move image up and down
        transition={{ duration: 2, repeat: Infinity }} // Animation duration and repetition
        
      />
    </div>
  );
};

export default FloatingImage;
