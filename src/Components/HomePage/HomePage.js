import React, { useRef, useEffect, useState } from 'react';
import AOS from 'aos';
import './HomePage.css';
import Portfolio from './HomePageComponents/Portfolio/Portfolio';
import Twitter from './HomePageComponents/TwitterFeed/Twitter';
import HomePageMiddleSection from './HomePageComponents/HomePageMiddleSection/HomePageMiddleSection.js';
import EditPortfolio from './HomePageComponents/Portfolio/Portfolio.js';
import InfoHeader from './HomePageComponents/InfoHeader/InfoHeader';
import PortfolioList from './HomePageComponents/Portfolio/Portfolio.js';

function HomePage() {
	let d = new Date(); // for now
	const [PortUpdateTime, setPortUpdateTime] = useState(
		`${d.getHours()}:${d.getMinutes()}`
	);
	const EditPortButton = useRef();

	AOS.init();

	useEffect(() => {
		// onclick = { EditPortfolio };
		console.log(EditPortButton.current);
		return () => {};
	}, []);

	useEffect(() => {
		console.log(d.getHours());
		setPortUpdateTime(`${d.getHours()}:${d.getMinutes()}`);
		console.log('Portfolio List Updated');
	}, [PortfolioList]);

	return (
		<div className="HomePage">
			<InfoHeader />
			<div className="PortfolioContainer">
				<h1 className="PortfolioHeader">My Portfolio</h1>
				<span className="UpdateEdit">
					<p className="LastUpdated">{`Last Updated ${PortUpdateTime}`}</p>

					<i
						class="material-icons"
						ref={EditPortButton}
						onclick={EditPortfolio}
					>
						edit
					</i>
				</span>

				<Portfolio />
			</div>

			<div className="HomePageMiddleSection">
				<HomePageMiddleSection />
			</div>

			<div className="TwitterListContainer">
				<Twitter />
			</div>
		</div>
	);
}

export default HomePage;
