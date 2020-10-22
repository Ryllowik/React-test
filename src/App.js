import React from 'react';
import {HashRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import Carousel from './Pages/carousel.js'

function App() {
  return (
    <Router>
      <div className="App">
          <Route path='/' exact render={() => <div className="card">
              <h3>Carousel</h3>
              <br/>
              <Link to="/carousel">See More</Link>
            </div>}/>
          <Route path='/carousel' exact render={() => <div>
            <Link to="/">Go back</Link>
            <br/>
            <Carousel/>
            </div>}/>
          
      </div>
    </Router>
  );
}

export default App;
