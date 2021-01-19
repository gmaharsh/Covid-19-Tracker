import './App.css';
import Cards from './Components/Cards/Cards';
import CountryPicker from './Components/CountryPicker/CountryPicker';
import Chart from './Components/Chart/Chart';

function App() {
  return (
    <div className="app">
      <Cards />
      <CountryPicker />
      <Chart />
    </div>
  );
}

export default App;
