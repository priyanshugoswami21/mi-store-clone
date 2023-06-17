import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Hotmenu.css";
const HotMenu = () => {
  return (
    <div className='Menu'>
        <Link className='menuLink' to='/music'>Music Store</Link>
        <Link className='menuLink' to='/smartDevices'>Smart Devices</Link>
        <Link className='menuLink' to='/home'>Home</Link>
        <Link className='menuLink' to='/lifestyle'>Lifestyle</Link>
        <Link className='menuLink' to='/mobile accessories'>Mobile Accessories</Link>


    </div>
  )
}

export default HotMenu