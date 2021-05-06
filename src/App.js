import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import MovieContainer from './Movies/MovieContainer';
import SearchBar from './Movies/SearchBar'
import {apiKey} from './Movies/Constants.json'



function App() {

    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState("");

    const updateSearch = (e) => {
      setSearch(e.target.value);
  }

    const makeRequest = () => {
      axios.get('http://www.omdbapi.com/?apikey=' + "11ef6095" + '&s=' + search)
        .then((res) => {
          setMovies(res.data.Search);
          
        })
    }


  return (
  
      <div className="App">
        <SearchBar updateSearch={updateSearch} makeRequest={makeRequest} search={search}/>
        <MovieContainer movies={movies}/>
      </div>
  
  )
  }


export default App;


// return (
//   <div className="Employees">
//     <EmployeeInfo/>
//   </div>
// )

  // const people = peopleJSON.map(person => <Person name={person.name} occupation={person.occupation} hobby={person.hobby} />);


  // return (
  //   <div className="App">
  //     <Shop/>
  //   </div>
  // )

//   return (
//   <div>
//     { <Game/> }
//   </div>
// )

  // return (
  //   <div className="App">
  //     { people }
  //     { <Header/> }
  //   </div>
  // );


  // return (
  //   <div>
  //   { <Cars/> }
  //   </div>
  // );

  // return (
  //   <div>
  //   { <Login/> }
  //   </div>
  // );


  // return (
  //   <div>
  //   { <MilesAhead/> }
  //   </div>
  // );

  // return (
  //   <div>
  //     <ComponentWithProps header="Header" content="message" number='3' nonexistant="null"/>
  //     <ComponentWithProps header="Another header" content="more content" number='23' nonexistant="null"/>
  //   </div>
  // )

