import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Signup from './components/Signup';
import About from './components/About';
import './App.css';


function App() {
    return (
        <Router>
        <div className="App">
         <Route path='/signup' component={Signup} />
         <Route path="/about" compoennt={About} />
        </div>
        </Router>
    )
}

export default App;