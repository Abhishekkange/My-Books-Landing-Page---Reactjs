import React from 'react';
import { motion } from 'framer-motion';
import '../Footer/footer.css'

const Footer = () => {
  const socialMediaLinks = [
    { name: 'Facebook', icon: 'facebook', link: 'https://www.facebook.com/' },
    { name: 'Twitter', icon: 'twitter', link: 'https://twitter.com/' },
    { name: 'Instagram', icon: 'instagram', link: 'https://www.instagram.com/' },
    // Add more social media links as needed
  ];

  return (
    <motion.footer className='footer-container'>
        
      <div >
        {socialMediaLinks.map((social, index) => (
          <motion.a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            
          >
            <i className={`fab fa-${social.icon}`} />
          </motion.a>
        ))}
      </div>
      <div>
        <p>Email: Abhishekkange@gmail.com</p>
        <p>Phone: 9309815795</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
