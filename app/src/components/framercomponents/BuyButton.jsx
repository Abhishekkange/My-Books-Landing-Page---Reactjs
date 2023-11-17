import React from 'react';
import { motion } from 'framer-motion';

const BuyButton = () => {
  return (
    <motion.button
      initial={{ opacity: 0, x: -30 }}
     whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      Buy Now
    </motion.button>
  );
};

export default BuyButton;
