import React from 'react';
import { motion } from 'framer-motion';

const BookDescription = () => {
  return (
    <motion.p
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut eaque in, deleniti similique autem esse alias optio vitae perferendis voluptate, consectetur tempora aperiam quisquam dolorum maxime quibusdam dolore. In, ab!
    </motion.p>
  );
};

export default BookDescription;
