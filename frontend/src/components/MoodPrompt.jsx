import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';


export default function MoodPrompt() {
const { setMood } = useApp();
const [text, setText] = useState('');
const navigate = useNavigate();


const detectMood = () => {
const lower = text.toLowerCase();
let mood = 'neutral';
if (lower.includes('sad')) mood = 'melancholic';
else if (lower.includes('bored')) mood = 'bored';
else if (lower.includes('happy')) mood = 'happy';
else if (lower.includes('excited')) mood = 'excited';
setMood({ label: mood, confidence: 0.9 });
};


return (
<div className="panel glass">
<h2>Type your mood</h2>
<textarea placeholder="I feel..." value={text} onChange={(e) => setText(e.target.value)} />
<button onClick={detectMood}>Detect Mood</button>
<button onClick={() => navigate('/recommendations')}>🎬 Find Movies</button>
</div>
);
}