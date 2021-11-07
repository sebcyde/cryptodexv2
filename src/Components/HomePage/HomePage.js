import React from 'react';
import AOS from 'aos';
import './HomePage.css';
import Portfolio from './HomePageComponents/Portfolio/Portfolio';

function HomePage() {
	AOS.init();

	return (
		<div className="HomePage">
			<h1>HomePage</h1>
			<Portfolio />
		</div>
	);
}

export default HomePage;
