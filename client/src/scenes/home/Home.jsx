import React from 'react';
import Navbar from '../global/Navbar';
import MainCarousel from './MainCarousel';
import ShoppingList from './ShoppingList';
import Footer from '../global/Footer.jsx';
import Section1 from './Section1';

const Home = () => {
  return (
    <div>
      <Navbar />
      <MainCarousel />
      <ShoppingList />
    </div>
  );
};

export default Home;
