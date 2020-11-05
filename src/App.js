import logo from './logo.svg';
import './App.css';
import React, { useState , useEffect} from 'react';

import axios from 'axios';
const URL = 'http://hn.algolia.com/api/v1/search';
function getUser() {
  return Promise.resolve({ id: '1', name: 'Julio FILS' });
}

function sum(number1, number2) {
  return number1 + number2
} 

function App() {

  const [search, setSearch] = React.useState('');
  const [user, setUser] = React.useState(null);

  const [stories, setStories] = React.useState([]);
  const [error, setError] = React.useState(null);
 
  React.useEffect(() => {
    const loadUser = async () => {
      const user = await getUser();
      setUser(user);
    };
 
    loadUser();
  }, []);
 

  async function handleFetch(event) {
    let result;
 
    try {
      result = await axios.get(`${URL}?query=React`);
 
      setStories(result.data.hits);
    } catch (error) {
      setError(error);
    }
  }
 
  
  function handleChange(event) {
    setSearch(event.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">

        <h1> Testing react </h1>
        <div>  {user ? <p>Signed in as {user.name}</p> : null} </div>
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>


        <button type="button" onClick={handleFetch}>
          Fetch Stories
      </button>
        
        {error && <span>Something went wrong ...</span>}
        
        <ul>
        {stories.map((story) => (
          <li key={story.objectID}>
            <a href={story.url}>{story.title}</a>
          </li>
        ))}
      </ul>

        <button onClick={() => sum(12, 13)}> Submit </button>

      </header>
    </div>
  );
}

export default App;
