import React from 'react';
import AOS from 'aos';
import './HomePage.css';
import Portfolio from './HomePageComponents/Portfolio/Portfolio';
import Twitter from './HomePageComponents/TwitterFeed/Twitter';

function HomePage() {
	AOS.init();

	return (
		<div className="HomePage">
			{/* <h1 className="HomePageTitle">HomePage</h1> */}
			<div className="PortfolioContainer">
				<h1 className="PortfolioHeader">My Portfolio</h1>
				<Portfolio />
			</div>
			<div className="TwitterListContainer">
				<Twitter />
			</div>
		</div>
	);
}

export default HomePage;
