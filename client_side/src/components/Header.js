import { useState } from 'react';
import '../css/Header.css';
import ContentArea from './ContentArea';

const Header = () => {
  const [switchLists, setSwitchLists] = useState();
  const changeJourney = () => setSwitchLists(true); 
  const changeStation = () => setSwitchLists(false); 

  return (
    <>
      <header>
        <h1 className='logo'>CityBike</h1>
        <div className='searchBar'>
        <input className='searchInput' placeholder='search by journey or station'></input>
        <button className='journeyButton' onClick={changeJourney}>Journeys</button>
        <button className='stationButton' onClick={changeStation}>Stations</button>
        </div>
      </header>
      <ContentArea switch={switchLists}/>
    </>
  )
}
export default Header