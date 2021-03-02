import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Signup from './components/Signup';
import './App.css';
import Nav from './components/Nav'


function App() {
    return (
        <Router>
        <div className="App">
        <Nav/>
         <Route path='/signup' component={Signup} />
        </div>
        </Router>
    )
}

export default App;