import { useEffect, useState } from 'react';
import iconSearch  from "./iconSearch.png";
import MyNewsComponent from './MyNewsComponent';
import MyTheme from "./MyTheme";
import React from 'react';


export const ColorContext = React.createContext();


const Home = () => {
    
  const [mySearch, setMySearch] = useState("");
  const [myNews, setMyNews] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState("");

  const API_KEY = '9ba19146bb1d4d7198a328a430362fad';


   useEffect( () => {
    const getNews = async() => {
      const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${wordSubmitted}&category=business&apiKey=${API_KEY}`);
      const data = await response.json();
      console.log(data.articles);
      setMyNews(data.articles)
    } 
    getNews()
   }, [wordSubmitted])

   
  const myNewsSearch = (e) => {
    console.log(e.target.value)
    setMySearch(e.target.value)
  }

  const finalSearch = (e) => {
    e.preventDefault() 
    setWordSubmitted(mySearch)
  }

  const [myColor, setMyColor] = useState(true);

  function changeColor() {
    setMyColor((myFirstColor) => !myFirstColor);
  }
   

    return(
        <div>
       <main>
    <section id="find-film">

     <div className='container'>
     <h2 className='agenda'>Find business news of your country</h2>

     <form onSubmit={finalSearch}>
      <input className='search' value={mySearch} onChange={myNewsSearch} placeholder='Search...'/>
     </form>

     <div>
      <button className='searchNews'><img src={iconSearch} onClick={finalSearch}  alt="icon" width="40px"/></button>
     </div>

     <ColorContext.Provider value={myColor}>
        <MyTheme/>
        <button className='changeColor' onClick={changeColor}>Change background theme</button> 

        </ColorContext.Provider>

   
      
      <div className='list'>
       { 
       myNews.map((element, index)  => (
        <MyNewsComponent key={index}
        author={element.author}
        urlToImage = {element.urlToImage}
        title={element.title}
        description={element.description}
        url={element.url}
        source={element.source.name}
        />
        ))}
      </div>
     </div>
     
    </section>
   </main>



        </div>
    )
}

export default Home;