import React, { useState, useRef } from 'react';
import './App.css';
import Entry from './Components/Entry/Entry.js';
import HomePage from './Components/HomePage/HomePage.js';

function App() {
	const [Splash, setSplash] = useState(<Entry />);

	setTimeout(() => {
		setSplash(<HomePage />);
	}, 3500);

	return <div className="App">{Splash}</div>;
}

export default App;
