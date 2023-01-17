import React from 'react';
import Navbar from '../global/Navbar';
import MainCarousel from './MainCarousel';
import ShoppingList from './ShoppingList';
import Footer from '../global/Footer.jsx';

const Home = () => {
  return (
    <div>
      <Navbar />
      <MainCarousel />
      <ShoppingList />
      <Footer />
    </div>
  );
};

export default Home;
