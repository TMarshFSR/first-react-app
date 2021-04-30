import logo from './logo.svg';
import './App.css';
import React from 'react';
import people from './people.json';
import Header from './Header.jsx';

function App() {
  

  const peopleAsHTML = people.map(person => {
    return (
      <div>
        <h1>{person.name}</h1>
        <p>{person.occupation}</p>
        <p>{person.hobby}</p>
      </div>
    );
  });

  return (
    <div className="App">
          <Header/>
      { peopleAsHTML }
    </div>
  );

}

export default App;
