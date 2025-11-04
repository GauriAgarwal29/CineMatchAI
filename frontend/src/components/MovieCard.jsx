import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import AuthModal from './AuthModal';


export default function MovieCard({ movie }) {
const { addToWatchlist, user } = useApp();
const [authOpen, setAuthOpen] = useState(false);


const handleAdd = () => {
if (!user) return setAuthOpen(true);
addToWatchlist(movie);
};


return (
<div className="movieCard glass">
<h3>{movie.title}</h3>
<p>{movie.genre} • ⭐ {movie.imdb}</p>
<p>{movie.ott}</p>
<button onClick={handleAdd}>Add to Watchlist</button>
{authOpen && <AuthModal onClose={() => setAuthOpen(false)} />}
</div>
);
}