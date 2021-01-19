import './App.css';
import Cards from './Components/Cards/Cards';
import CountryPicker from './Components/CountryPicker/CountryPicker';
import Chart from './Components/Charts/Chart';
import { useEffect, useState } from 'react';
import { fetchData } from './api';

function App() {

  const[data, setData] = useState({})

  useEffect(() => {
    async function fetchingData() {
      const data = await fetchData();
      setData(data.data);
    }

    fetchingData()
  }, [])
  
  console.log("State:-",data)

  return (
    <div className="app">
      <Cards data = {data} />
      <CountryPicker />
      <Chart />
    </div>
  );
}

export default App;
