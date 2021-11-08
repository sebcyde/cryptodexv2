import React, { useRef, useEffect } from 'react';
import AOS from 'aos';
import './HomePage.css';
import Portfolio from './HomePageComponents/Portfolio/Portfolio';
import Twitter from './HomePageComponents/TwitterFeed/Twitter';
import EditPortfolio from './HomePageComponents/Portfolio/Portfolio.js';

function HomePage() {
	AOS.init();
	const EditPortButton = useRef();

	useEffect(() => {
		// onclick = { EditPortfolio };
		console.log(EditPortButton.current);
		return () => {};
	}, []);

	return (
		<div className="HomePage">
			{/* <h1 className="HomePageTitle">HomePage</h1> */}
			<div className="PortfolioContainer">
				<h1 className="PortfolioHeader">My Portfolio</h1>
				<button
					className="EditPortfolio"
					ref={EditPortButton}
					onclick={EditPortfolio}
				>
					Edit Portfolio
				</button>
				<Portfolio />
			</div>

			{/* <div className="MainContainer">
				<Main />
			</div> */}

			<div className="TwitterListContainer">
				<Twitter />
			</div>
		</div>
	);
}

export default HomePage;
