import React, { useEffect, useState } from 'react';
import throttle from 'lodash/throttle';
import Navbar from './components/navbar/Navbar';
import Hero from './components/Hero/Hero';
import AboutAuthor from './components/AboutAuthor/AboutAuthor';
import OtherBookHero from './components/Other books/OtherBookHero';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';
import Book2 from './components/framercomponents/Book2';

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState('#0c0c1d');

  useEffect(() => {
    const handleScroll = throttle(() => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const maxScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollFraction = scrollTop / maxScroll;

      // Update the background color only if the scroll has progressed beyond 10% and 90%
      if (scrollFraction > 0.1 && scrollFraction < 0.9) {
        const startColor = [12, 12, 29]; // RGB values of #0c0c1d
        const endColor = [135, 206, 235]; // RGB values of light blue #87CEEB

        const currentR = Math.round(startColor[0] + scrollFraction * (endColor[0] - startColor[0]));
        const currentG = Math.round(startColor[1] + scrollFraction * (endColor[1] - startColor[1]));
        const currentB = Math.round(startColor[2] + scrollFraction * (endColor[2] - startColor[2]));

        const newColor = `rgb(${currentR}, ${currentG}, ${currentB})`;
        setBackgroundColor(newColor);
      }
    }, 100); // Throttle time in milliseconds

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const appStyle = {
    background: `linear-gradient(to bottom, #0c0c1d, ${backgroundColor})`,
    transition: 'background 0.5s ease',
  };

  return (
    <div style={appStyle}>
      <section id='homepage'>
        <Navbar />
        <Hero />
      </section>
      <section>
        <AboutAuthor />
      </section>
      <section>
        <OtherBookHero />
        <Book2 />
      </section>
      <section>
        <ContactUs />
        <Footer />
      </section>
    </div>
  );
};

export default App;
