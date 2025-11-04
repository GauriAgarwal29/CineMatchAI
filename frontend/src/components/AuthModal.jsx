import React, { useState } from 'react';
import { useApp } from '../context/AppContext';


export default function AuthModal({ onClose }) {
const { setUser } = useApp();
const [mode, setMode] = useState('login');
const [form, setForm] = useState({ name: '', email: '', password: '' });
const [error, setError] = useState('');


const handleSubmit = (e) => {
e.preventDefault();
if (mode === 'signup' && form.email === 'exists@example.com') return setError('User already exists');
if (mode === 'login' && !(form.email && form.password)) return setError('Invalid credentials');
setUser({ name: form.name || 'User', email: form.email });
onClose();
};


return (
<div className="modalOverlay">
<div className="modalBox">
<h3>{mode === 'signup' ? 'Sign Up' : 'Login'}</h3>
{error && <p className="errorMsg">{error}</p>}
<form onSubmit={handleSubmit}>
{mode === 'signup' && <input placeholder="Name" value={form.name} onChange={e => setForm({...form, name:e.target.value})} />}
<input placeholder="Email" value={form.email} onChange={e => setForm({...form, email:e.target.value})} />
<input type="password" placeholder="Password" value={form.password} onChange={e => setForm({...form, password:e.target.value})} />
<button type="submit">{mode === 'signup' ? 'Sign Up' : 'Login'}</button>
</form>
<button className="linkBtn" onClick={() => setMode(mode === 'signup' ? 'login' : 'signup')}>
{mode === 'signup' ? 'Already have account? Login' : 'New user? Sign up'}
</button>
<button className="closeBtn" onClick={onClose}>✕</button>
</div>
</div>
);
}