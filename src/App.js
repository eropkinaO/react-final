import Plan from './Plan';
import Filter from './Filter';
import './App.css';
import Categories from './Categories';
import Home from './Home';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes, 
  Route,
  Link
} from "react-router-dom";
import { useEffect, useState } from 'react'; 
import MyFilmComponent from './MyFilmComponent';

function App() {
   const [mySearch, setMySearch] = useState("");
   const [myFilm, setMyFilm] = useState();


   useEffect(() => {
  const getFilm = async () => {
    const response = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=78d306d8");
    const data = await response.json();
    console.log(data.Title);
    setMyFilm(data.Title);
  }
  getFilm()
}, [])

const myFilmSearch = (e) => {
  console.log(e.target.value)
  setMySearch(e.target.value)
}
  
  return (
    <div>
      
<header>
 <Router>
  <nav>
<h2 className='database'>Your Movies Database</h2>
<Link to="/" className="link">First page</Link>
<Link to="/plan" className="link">План фильмов</Link>
<Link to="/categories" className="link">Категории фильмов</Link>
<Link to="/filter" className="link">Фильтр фильмов</Link>    
  </nav>

  <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/plan" element={<Plan/>}/>
  <Route path="/categories" element={<Categories/>}/>
  <Route path="/filter" element={<Filter/>}/>
  </Routes>
  </Router>
      </header>

   <main>
    <section id="find-film">
    <p>Find your film</p>

     <div className='container'>
     <form>
     <input className='search' placeholder='Search your film...' onChange={myFilmSearch} value={mySearch}/>
     </form>
     </div>
      
      <div>
      {myFilm && Object.values(myFilm).map(({Title, Genre, Year}, index) => (
        <MyFilmComponent key={index}
        title={Title}
        genre={Genre}
        year={Year}/>
      ))}
      </div>
    </section>
   </main>


    </div>
  );
}

export default App;
