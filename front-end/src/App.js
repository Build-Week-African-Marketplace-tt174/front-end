import React from 'react';
import { BrowserRouter as Router, Link, Route } from "react-router-dom"
import Signup from './components/Signup';
import About from './components/About';
import Sell from './components/Sell';
import './App.css';
import Nav from './components/Nav'


function App() {
    return (
        <Router>
        <div className="App">
            <nav>
                <Link to="/about">About Us</Link>
                <Link to="/signup">Signup</Link>
            </nav>
         <Route path='/signup' component={Signup} />
         <Route path="/about" component={About} />
         <Route path="/sell" component={Sell} />
        </div>
        </Router>
    )
}

export default App;