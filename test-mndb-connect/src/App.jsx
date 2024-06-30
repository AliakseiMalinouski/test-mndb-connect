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
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await response.json();
      setData(jsonData);
      console.log(jsonData)
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error state if needed
    }
  };

  return (
    <div className="App">
      <h1>Data from MongoDB</h1>
      <ul>
        {data.map((item) => (
          <li key={item._id}>{item.name} - {item.description}</li>
          // Adjust item.name and item.description based on your MongoDB schema
        ))}
      </ul>
    </div>
  );
}

export default App;
