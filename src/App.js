import React, { useState } from "react";
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

    const [movies, setMovies] = useState([]);
    const [searcgTerm, setSerachTerm] = useState('');

    const serachMovies = async (title) => {
        const response = await fetch(`${API_URl}&s=${title}`); 
        const data = await response.json();
        setMovies(data.Search);
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
                    value={searcgTerm}
                    onChange={(e) => setSerachTerm(e.target.value)}
                />

                <img
                 src ={SearchIcon}
                 alt = "search"
                 onClick={() => serachMovies(searcgTerm)}
                />

            </div>
            {
                movies?.length > 0
                ? (
                    <div className="container">
                        {
                            movies.map((movie) => (
                                <MovieCard movie = {movie} />
                            ))
                        }
                    </div>
                ): (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )
            }
        </div>

        
);
}

export default App;