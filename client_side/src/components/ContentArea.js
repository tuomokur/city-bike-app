import '../css/ContentArea.css';
import Journeys from './Journeys';
import Stations from './Stations';

const ContentArea = (props) => {
  return (
    <>
      {props.switch ?  <Journeys/> : <Stations/> }
    </>
  )
}
export default ContentArea