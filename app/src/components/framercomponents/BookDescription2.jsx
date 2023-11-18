import React from 'react';
import { motion } from 'framer-motion';
import '../Hero/Hero.css';

const BookDescription = () => {
  return (
    <motion.p
      initial={{ opacity: 0, y: 50,scale:0.5 }}
      whileInView={{ opacity: 1, y: 0,scale: 1 }}
      className='ptag'
      transition={{ duration: 0.4 }} 
    >

      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut eaque in, deleniti similique autem esse alias optio vitae perferendis voluptate, consectetur tempora aperiam quisquam dolorum maxime quibusdam dolore. In, ab!
    </motion.p>
  );
};

export default BookDescription;
