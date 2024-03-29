import {useState} from 'react';
// import Papa from 'papaparse';
import Modal from './Modal';
import '../css/Stations.css';

const Stations = () => {
  const [show, setShow] = useState(false);
  // const [stations, setStations] = useState();

  // Papa.parse("https://opendata.arcgis.com/datasets/726277c507ef4914b0aec3cbcfcbfafc_0.csv", {
  // download: true,
  // complete: results => {   
  //   console.log(results.data[0]); 
  //   setStations(results.data.slice(1, 11).map((item) => {
  //     return (
  //       <tr key={item[1]}>
  //         <td>{item[2]}</td>
  //         <td>{item[5]}</td>
  //         <td>{item[7]}</td>
  //       </tr>
  //     )
  //   }))
  // }
  // });

      
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
          <tr className='row' onClick={setShow}>
            <td>Station 1</td>
            <td>Station 1</td>
            <td>Station 1</td>
          </tr>
          <tr onClick={setShow}>
            <td>Station 1</td>
            <td>Station 1</td>
            <td>Station 1</td>
          </tr>
          <tr onClick={setShow}>
            <td>Station 1</td>
            <td>Station 1</td>
            <td>Station 1</td>
          </tr>
            {/* {stations} */}
          </tbody>
        </table>
      </div>
      <Modal show={show} onClose={() => setShow(false)}/>
    </>
  )
}
export default Stations