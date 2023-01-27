// import {useState} from 'react';
// import Papa from 'papaparse';
// import journeys05 from '../data/2021-05.csv';

const Journeys = () => {
    // const [journeys, setJourneys] = useState();

    // Papa.parse(journeys05, {
    //     download: true,
    //     complete: results => {
    //         console.log(results.data.slice(1, 10));
    //         setJourneys(results.data.slice(1, 11).map((item, index) => {
    //             return (
    //                 <tr key={index}>
    //                     <td>{item[3]}</td>
    //                     <td>{item[5]}</td>
    //                     <td>{item[6]}</td>
    //                     <td>{item[7]}</td>
    //                 </tr>
    //             )
    //         } ))
    //     }
    // })

  return (
    <>
        <div className="tableContainer">
        <h2 className='tableTitle'>Bike Journeys</h2>
        <table>
            <thead>
            <tr>
                <th>Departure station</th>
                <th>Return station</th>
                <th>Distance(km)</th>
                <th>Duration (min)</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>journey1</td>
                <td>journey1</td>
                <td>journey1</td>
                <td>journey1</td>
            </tr>
                {/* {journeys} */}
            </tbody>
        </table>
        </div>
    </>
  )
}

export default Journeys