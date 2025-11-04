import React from 'react';
import { useApp } from '../context/AppContext';
import WatchlistCard from '../components/WatchlistCard';


export default function Watchlist() {
const { watchlist } = useApp();
return (
<div className="watchlist">
<h2>My Watchlist</h2>
{watchlist.length ? watchlist.map(m => <WatchlistCard key={m.id} movie={m} />) : <p>No movies added.</p>}
</div>
);
}