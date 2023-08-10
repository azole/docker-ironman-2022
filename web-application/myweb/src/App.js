import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
function App() {
  const [conferences, setConferences] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/conferences');
        const conferences = await response.json();
        console.log(conferences);
        setConferences(conferences.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      <div class="list">
        <h1>Conferences</h1>
        <ul>
          {conferences.map((conference) => (
            <li key={conference.id}>
              <a href={conference.url} target="_blank" rel="noreferrer">
                {conference.title} at {conference.date}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
