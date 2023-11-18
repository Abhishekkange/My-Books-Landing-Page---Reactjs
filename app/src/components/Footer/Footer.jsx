import React from 'react';
import { motion } from 'framer-motion';
import '../Footer/footer.css'

const Footer = () => {
  const socialMediaLinks = [
    { name: 'Facebook', icon: 'facebook', link: 'https://www.facebook.com/' },
    { name: 'Twitter', icon: 'twitter', link: 'https://twitter.com/' },
    { name: 'Instagram', icon: 'instagram', link: 'https://www.instagram.com/' },
   
  ];

  return (
    <motion.footer className='footer-container'>
        
      <div >
        <div className="iconContainer">
            <div >
                <img id="twitterlogo" src="./twitter.png" alt="" />
                
            </div>
            <div className="icon">
                <img src="./instagram.png" alt="" />
               
            </div>
            <div className="icon">
                <img src="./facebook.png" alt="" />
               
            </div>
        </div>
      </div>
      <div className='contactInfo'>
        <p>Email: Abhishekkange@gmail.com</p>
        <p>Phone: 9309815795</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
