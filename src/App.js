import React from 'react';
import Navbar from './components/Navbar';
import {
  Hero,
  PopularProducts,
  MoreProducts,
  BestSellers,
  Testimonials,
  Footer,
} from './container';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <PopularProducts />
      <MoreProducts />
      <BestSellers />
      <Testimonials />
      <div>
        <Footer />
      </div>
    </>
  );
};

export default App;
