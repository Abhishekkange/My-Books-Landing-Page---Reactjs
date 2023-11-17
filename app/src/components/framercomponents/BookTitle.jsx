import React from 'react';
import { motion } from 'framer-motion';

const BookTitle = () => {
  return (
    <motion.h1
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      Let's Code Facebook
    </motion.h1>
  );
};

export default BookTitle;
