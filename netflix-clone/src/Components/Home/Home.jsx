import React, { useEffect, useState } from 'react';
import "./Home.scss";
import axios from 'axios';

const apiKey = "c3f11548b6762bc39c99df82d0e2ac36";
const popularMovieUri = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=1`
const upComingMovieUri = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&page=1`
const topRatedMovieUri = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&page=1`
const nowPlayingMovieUri = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=1`
const imgUrl = `https://image.tmdb.org/t/p/original`


const Card = ({ img }) => {
  return (

    <img className='card' src={img} alt='cover'></img>
  );
}


const Row = ({ title, movArr=[]}) => {

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div>
          {
            movArr.map((item, index)=>(
              <Card key={index} img={`${imgUrl}/${item.poster_path}`} ></Card>
            ))
          }
      
      </div>
    </div>
  );

}


const Home = () => {

  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

  useEffect(()=>{

    const fetchUpcomingMovies = async() =>{
      const {data:{results}} = await axios.get(upComingMovieUri);
      setUpcomingMovies(results);
    }

    const fetchPopularMovies = async() =>{
      const {data:{results}} = await axios.get(popularMovieUri);
      setPopularMovies(results);
    }


    const fetchTopRatedMovies = async() =>{
      const {data:{results}} = await axios.get(topRatedMovieUri);
      setTopRatedMovies(results);
    }

    const fetchNowPlayingMovies = async() =>{
      const {data:{results}} = await axios.get(nowPlayingMovieUri);
      setNowPlayingMovies(results);
    }

    fetchUpcomingMovies();
    fetchPopularMovies();
    fetchTopRatedMovies();
    fetchNowPlayingMovies();

  }, [])

  return (
    <section className="home">
      <div className="banner"></div>
      <Row title={"Upcoming Movies"} movArr={upcomingMovies} />
      <Row title={"Popular Movies"} movArr={popularMovies} />
      <Row title={"Top Rated"} movArr={topRatedMovies}/>
      <Row title={"Now Playing"} movArr={nowPlayingMovies} />
    </section>
  )
}

export default Home;
