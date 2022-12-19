import React from 'react';
import '../css/Header.css';

const Header = () => {
  return (
    <>
      <header>
        <h1 className='logo'>CityBike</h1>
        <div className='searchBar'>
        <input className='searchInput' placeholder='search by journey or station'></input>
          <button className='journeyButton'>Journey</button>
          <button className='stationButton'>Station</button>
        </div>
      </header>
    </>
  )
}

export default Header