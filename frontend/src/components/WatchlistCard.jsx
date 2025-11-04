import React from 'react';
import { useApp } from '../context/AppContext';


export default function WatchlistCard({ movie }) {
const { removeFromWatchlist } = useApp();
return (
<div className="watchCard">
<h3>{movie.title}</h3>
<p>{movie.genre}</p>
<button onClick={() => removeFromWatchlist(movie.id)}>Remove</button>
</div>
);
}