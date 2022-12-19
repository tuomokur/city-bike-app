import './css/normalize.css';
import './css/skeleton.css';
import './css/App.css';
import ContentArea from './components/ContentArea';
import Header from './components/Header';
import Pagination from './components/Pagination';

function App() {
  return (
    <>
      <div className='appContainer container'>
        <Header/>
        <Pagination/>
        <ContentArea/>
      </div>
    </>
  );
}

export default App;
