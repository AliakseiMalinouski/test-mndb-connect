import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000');
      // if (!response.ok) {
      //   throw new Error('Network response was not ok');
      // }
      const jsonData = await response.json()
      setData(jsonData);
      console.log(jsonData)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="App">

    </div>
  );
}

export default App;
