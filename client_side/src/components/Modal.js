import '../css/Modal.css';

const Modal = (props) => {

  if(!props.show){
    return null
  } 

  return (
    <div className='modal'>
      <ul>
        <li>Station name</li>
        <li>Station address</li>
        <li>Total departures</li>
        <li>Total arrivings</li>
      </ul>
      <button onClick={props.onClose}>x</button>
    </div>
  )
}
export default Modal