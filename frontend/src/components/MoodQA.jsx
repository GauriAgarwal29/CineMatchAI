import React, { useState } from 'react';
import { useApp } from '../context/AppContext';


export default function MoodQA() {
const { setMood } = useApp();
const [answers, setAnswers] = useState({});
const questions = [
{ id: 'energy', q: "How's your energy today?", opts: ['Low', 'Medium', 'High'] },
{ id: 'tone', q: 'Do you want to laugh or cry?', opts: ['Laugh', 'Cry', 'Comfort', 'Thrill'] }
];
const [step, setStep] = useState(0);


const choose = (id, value) => {
const newAns = { ...answers, [id]: value };
setAnswers(newAns);
if (step + 1 < questions.length) setStep(step + 1);
else {
let mood = 'neutral';
if (newAns.energy === 'High' && newAns.tone === 'Thrill') mood = 'excited';
else if (newAns.energy === 'Low' && newAns.tone === 'Cry') mood = 'melancholic';
else if (newAns.tone === 'Laugh') mood = 'happy';
setMood({ label: mood, confidence: 0.8 });
}
};


return (
<div className="panel glass">
<h2>Answer a few questions</h2>
<p>{questions[step].q}</p>
<div className="btnRow">
{questions[step].opts.map(opt => <button key={opt} onClick={() => choose(questions[step].id, opt)}>{opt}</button>)}
</div>
</div>
);
}