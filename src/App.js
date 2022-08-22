import React from "react";
import { useEffect } from "react";

import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";

//d88eea


const API_URl = 'https://www.omdbapi.com?apikey=d88eea';

const movie1 =
    {
        "Title": "Amazing Spiderman Syndrome",
        "Year": "2012",
        "imdbID": "tt2586634",
        "Type": "movie",
        "Poster": "N/A"
    };


const App = () => {
    const serachMovies = async (title) => {
        const response = await fetch(`${API_URl}&s=${title}`); 
        const data = await response.json();
        console.log(data);
    }

    useEffect(() =>{
        serachMovies('Spiderman');
    }, []);
    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input
                    placeholder="Search for movies"
                    value="Superman"
                    onChange={() => {}}
                />

                <img
                 src ={SearchIcon}
                 alt = "search"
                 onClick={() => {}}
                />

            </div>
            <div className="container">
                <MovieCard movie1 = {movie1} />
            </div>
        </div>

        
);
}

export default App;