import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import PreNav from './components/PreNav';
import Slider from './components/Slider';
import data from './data/data.json';
import Offers from './components/Offers';
import Heading from './components/Heading';
import StarProduct from './components/StarProduct';
import HotMenu from './components/HotMenu';
import HotAccessories from './components/HotAccessories';

function App() {
  return (
    <Router>
      <PreNav />
      <Navbar />
      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      <Heading text="STAR PRODUCT"/>
      <StarProduct starProduct={data.starProduct}/>
      <Heading text="HOT PRODUCT"/>
      <HotMenu/>
      <HotAccessories/>
      <Route exact path='/music'>
        <HotAccessories music={data.hotAccessories.music} musicCover={hotAccessoriesCover.music}/>
      </Route>
    </Router>
  );
}

export default App;
