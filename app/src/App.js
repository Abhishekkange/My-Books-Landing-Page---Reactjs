
import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/navbar/Navbar';
import AboutAuthor from './components/AboutAuthor/AboutAuthor';
import OtherBookHero from './components/Other books/OtherBookHero';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';




function App() {
  return (
    <>
    <section id='homepage'>
      <Navbar/>
      <Hero />
    </section>
    <section>
      <AboutAuthor/>
    </section>
    
    <section><OtherBookHero/></section>
    <secion>
      <ContactUs/>
    <Footer/>
    </secion>
   


    </>
  );
}

export default App;
