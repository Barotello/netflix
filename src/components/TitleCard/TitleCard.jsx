import React, { useEffect, useRef, useState } from 'react'
import './TitleCard.css'
import { Link } from 'react-router-dom';



const TitleCard = ({title, category}) => {
 // bu asagıda yazan kod scrool gizli iken farenin resimler üzerine geldiği durumda resimlerin uzerine gelince scroll yapmasını sağlar.
 
 const [apiData,setApiData] = useState([]);
 const cardsRef = useRef();

  

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzE2OGU5MjYxYTUzNThhYTVjMzY5YWIzYmE2ZTk4YSIsIm5iZiI6MTc0NjI3MjU4My4xMzYsInN1YiI6IjY4MTYwMTQ3MjFlNTYzNGI5ODk1OTRmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gJDSDAIRDP2SODo8EIFf0cYTRBKeN7jYA3sESOLjjvE'
    }
  };
  


  const handleWheel = (event)=>{
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }

  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel', handleWheel)
  },[])
  

  // buraya kadar scroolla alakalı kodlar var.
  return (
    <div className='titlecards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
         {apiData.map((card,index)=>{
          return <Link to ={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </Link>
         })}
      </div>
      </div>
  )
}

export default TitleCard 
