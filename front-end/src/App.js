import React from 'react';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import WelcomePage from './components/WelcomePage'
import Signup from './components/Signup';
import About from './components/About';
import Sell from './components/Sell';
import Login from './components/Login';
import ItemList from './components/ItemList'
import './App.css';


function App() {
    return (
        <Router>
        <div className="App">
         <Route exact path='/' component={WelcomePage} />
         <Route path='/signup' component={Signup} />
         <Route path='/login' component={Login} />
         <Route path='/about' component={About} />
         <Route path='/sell' component={Sell} />
         <Route path='/itemlist' component={ItemList} />
        </div>
        </Router>
    )
}

export default App;