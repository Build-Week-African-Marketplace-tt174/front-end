import React from 'react';
import { BrowserRouter as Router, Link, Route } from "react-router-dom"
import Signup from './components/Signup';
import About from './components/About';
import './App.css';


function App() {
    return (
        <Router>
        <div className="App">
            <nav>
                <Link to="/about">About Us</Link>
                <Link to="/signup">Signup</Link>
            </nav>
         <Route path='/signup' component={Signup} />
         <Route path="/about" compoennt={About} />
        </div>
        </Router>
    )
}

export default App;