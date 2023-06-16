import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import PreNav from './components/PreNav';
import Slider from './components/Slider';
import data from './data/data.json';
import Offers from './components/Offers';

function App() {
  return (
    <Router>
      <PreNav />
      <Navbar />
      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
    </Router>
  );
}

export default App;
