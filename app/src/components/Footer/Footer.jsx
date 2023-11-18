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
    <motion.footer style={footerStyle}>
      <div style={socialMediaStyle}>
        {socialMediaLinks.map((social, index) => (
          <motion.a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            style={iconStyle}
          >
            <i className={`fab fa-${social.icon}`} />
          </motion.a>
        ))}
      </div>
      <div style={contactInfoStyle}>
        <p>Email: example@example.com</p>
        <p>Phone: +1234567890</p>
      </div>
    </motion.footer>
  );
};

const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const socialMediaStyle = {
  display: 'flex',
  gap: '10px',
};

const iconStyle = {
  color: '#fff',
  fontSize: '1.5em',
};

const contactInfoStyle = {
  textAlign: 'right',
};

export default Footer;
