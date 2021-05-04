import logo from './logo.svg';
import './App.css';
import React from 'react';
import peopleJSON from './people.json';
import Header from './Header.jsx';
import ComponentWithProps from './ComponentWithProps';
import Person from './Person';

function App() {

  const people = peopleJSON.map(person => <Person name={person.name} occupation={person.occupation} hobby = {person.hobby}/>);

  return (
    <div className="App">
      { people }
      { <Header/> }
    </div>
  );

    // return (
  //   <div>
  //     <ComponentWithProps header="Header" content="message" number='3' nonexistant="null"/>
  //     <ComponentWithProps header="Another header" content="more content" number='23' nonexistant="null"/>
  //   </div>
  // )

}

export default App;
