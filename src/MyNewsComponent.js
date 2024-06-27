function MyNewsComponent({author, title, description, url, source, urlToImage}) {
    return(<div className="container">
       <ul className="container list">
            <li className="title">{title}</li>
       </ul>
     <div className="container">
     <img className="newsImage" src={urlToImage} alt="newsImage" width="370px"/>
      <p> Author: {author}</p>
      <p>Source: {source}</p>
      </div>
     <div className="container">
      <p className="description">{description}</p>
     <p className="url">{url}</p>
     </div>

 
      
    </div>
    )
}

export default MyNewsComponent;