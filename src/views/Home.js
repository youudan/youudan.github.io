import React, { Fragment } from 'react';
import Wijdan from '../img/wijdan.jpg';
import Hero from '../components/Home/Hero';
import About from '../components/Home/About';
import Portfolio from '../components/Home/Portfolio';
import Contact from '../components/Home/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <Fragment>
      {/* Hero */}
      <Hero />
      {/* About me */}
      <About img={Wijdan} />
      {/* Portfolio */}
      <Portfolio />
      {/* Contact */}
      <Contact email='wijdan.m.ridwanulloh@gmail.com' />
      {/* Footer */}
      <Footer credits='Wijdan Muhammad R / YouuDan / Niki' />
    </Fragment>
  );
};

export default Home;
