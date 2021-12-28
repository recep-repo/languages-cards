import './App.css';
import react from './assets/react.svg'
import Data from './helper/Data'
import Card from './components/Card'


function App() {
  return (
    <div className="App">
      <img src={react} alt="react" className='react-logo' />
      <div className="main">
        <h2>LANGUAGES</h2>
        <div className="card-container">
          {Data.map((card) => (
            <Card name={card.name} img={card.img} options={card.options}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
