import React, { useState } from "react";
import MovieCard from "../components/MovieCard.jsx";
import "../styles/Pages.css";

export default function MovieRecommendations() {
  const [watchlist, setWatchlist] = useState([]);

  const movies = [
    { title: "Inside Out", genre: "Animation", rating: "8.1", poster: "https://via.placeholder.com/200" },
    { title: "La La Land", genre: "Romance", rating: "8.0", poster: "https://via.placeholder.com/200" },
  ];

  const addToWatchlist = (movie) => {
    setWatchlist([...watchlist, movie]);
    alert(`${movie.title} added to watchlist`);
  };

  return (
    <div className="page movies-page">
      <h1>Recommended Movies 🎥</h1>
      <div className="movie-grid">
        {movies.map((m) => (
          <MovieCard key={m.title} movie={m} onAdd={addToWatchlist} />
        ))}
      </div>
    </div>
  );
}
