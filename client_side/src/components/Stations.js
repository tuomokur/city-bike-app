import {useState} from 'react';
import Papa from 'papaparse';

const Stations = () => {
  const [stations, setStations] = useState();

  Papa.parse("https://opendata.arcgis.com/datasets/726277c507ef4914b0aec3cbcfcbfafc_0.csv", {
  download: true,
  complete: results => {   
    // console.log(results.data[0]); 
    setStations(results.data.slice(1, 11).map((item, index) => {
      return (
        <tr key={item[1]}>
          <td>{item[2]}</td>
          <td>{item[5]}</td>
          <td>{item[7]}</td>
        </tr>
      )
    }))
  }
  });
      
  return (
    <>
      <div className="tableContainer">
        <h2 className='tableTitle'>Bike Stations</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {stations}
          </tbody>
        </table>
      </div>
    </>
  )
}
export default Stations