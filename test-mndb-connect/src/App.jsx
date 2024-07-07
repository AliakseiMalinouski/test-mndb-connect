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
      const jsonData = await response.json()
      setData(jsonData);
      console.log(jsonData)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleAdd = async () => {
    const newItem = {
      title: 'new item',
    }
    const res = await fetch('http://localhost:3000/add', {
      method: 'POST',
      body: JSON.stringify(newItem),
      headers: {
        'Content-Type': 'application/json', 
      },
    });

    if(!res.ok) {
      console.log('ERROR POST REQUEST')
    }

    console.log('POST STARTED SUCCESS')
  }

  return (
    <div className="App">
      <button
        onClick={handleAdd}
      >add item</button>
    </div>
  );
}

export default App;
