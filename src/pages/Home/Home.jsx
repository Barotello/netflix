import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCard from '../../components/TitleCard/TitleCard'
import Footer from '../../components/Footer/Footer'
const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img' />
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img' /> 
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut delectus sit numquam quo dolore exercitationem velit dolores quidem nobis debitis nostrum rem perferendis dolorem maiores doloremque libero ipsam, magnam qui.</p>

          <div className="hero-btn">
            <button className='btn'><img src={play_icon} alt="" />Play</button>
            <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
          </div>
          <TitleCard/>
        </div>
      </div>
      <div className="more-cards">
      <TitleCard title={"Now Playing"} category={"now_playing"}/>
      <TitleCard title={"Top Rated"} category={"top_rated"}/>
      <TitleCard title={"Popular"} category={"popular"}/>
      <TitleCard title={"Upcoming"} category={"upcoming"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
