import Plan from './Plan';
import FilterMyPlans from './FilterMyPlans';
import Home from './Home';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes, 
  Route,
  Link
} from "react-router-dom";




function App() {
  

  return (
    <div>
      
<header>
 <Router>
 
  <nav>
<h2 className='database'>News for you</h2>
<Link to="/" className="link">Today news</Link>
<Link to="/plan" className="link">Your planning</Link>
<Link to="/filter" className="link">Choose your plans</Link>   
  </nav>
 
 

  <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/plan" element={<Plan/>}/>
  <Route path="/filter" element={<FilterMyPlans/>}/>
  </Routes>
  </Router>
      </header>
     
     
   

    </div>
  );
}

export default App;
