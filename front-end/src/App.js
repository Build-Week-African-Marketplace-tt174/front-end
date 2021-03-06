import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WelcomePage from './components/WelcomePage'
import Signup from './components/Signup';
import About from './components/About';
import Sell from './components/Sell';
import Login from './components/Login';
import ItemList from './components/ItemList';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';


function App() {
    return (
        <Router>
        <div className="App">
            <Switch>
                <Route exact path='/' component={WelcomePage} />
                <Route path='/signup' component={Signup} />
                <Route path='/login' component={Login} />
                <Route path='/about' component={About} />
                <ProtectedRoute exact path='/sell' component={Sell} />
                <Route path='/itemlist' component={ItemList} />
            </Switch>
        </div>
        </Router>
    )
}

export default App;