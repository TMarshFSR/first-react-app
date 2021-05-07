import './App.css';
import React from 'react';
import axios from 'axios';
import { useState, useEffect,} from 'react';
import Home from './UsersExercise/Home';
import Users from './UsersExercise/Users';
import Contact from './UsersExercise/Contact';
import Page404 from './UsersExercise/404';
import Navbar from './UsersExercise/Navbar';
import {BrowserRouter as Router, Route, Switch, useParams} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <Router>
    <Navbar/>
        <Switch>
        <Route exact path="/">
            <Home/>
        </Route>
        <Route path="/users/:id">
            <Users />
        </Route>
        <Route path="/users">
            <Users />
        </Route>
        <Route path="/page404">
            <Page404/>
        </Route>
        <Route path="/contact">
            <Contact/>
        </Route>
        </Switch>
    </Router>
);
}

export default App;