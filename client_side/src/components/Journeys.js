

const Journeys = () => {

  return (
            // TEMPORARY PLACEHOLDER TABLE DATA !!!
    <>
        <div className="tableContainer">
        <h2 className='tableTitle'>Bike Journeys</h2>
        <table>
            <thead>
            <tr>
                <th></th>
                <th>Return station</th>
                <th>Distance(km)</th>
                <th>Duration (min)</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>start</td>
                <td>finish</td>
                <td>2</td>
                <td>15</td>
            </tr>
            <tr>
                <td>finish</td>
                <td>start</td>
                <td>6</td>
                <td>24</td>
            </tr>
            </tbody>
        </table>
        </div>
    </>
  )
}

export default Journeys