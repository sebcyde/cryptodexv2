import React, { useRef, useEffect, useState } from 'react';
import AOS from 'aos';
import './HomePage.css';
import Portfolio from './HomePageComponents/Portfolio/Portfolio';
import Twitter from './HomePageComponents/TwitterFeed/Twitter';
import Search from './HomePageComponents/Search/Search';
import HomePageMiddleSection from './HomePageComponents/HomePageMiddleSection/HomePageMiddleSection.js';
import EditPortfolio from './HomePageComponents/Portfolio/Portfolio.js';
import InfoHeader from './HomePageComponents/InfoHeader/InfoHeader';
import PortfolioList from './HomePageComponents/Portfolio/Portfolio.js';
import Nav from './HomePageComponents/Nav/Nav';
import News from './HomePageComponents/News/News.js';

function HomePage() {
	AOS.init();
	let d = new Date(); // for now
	const [PortUpdateTime, setPortUpdateTime] = useState(
		(d.getHours() < 10 ? '0' : '') +
			d.getHours() +
			':' +
			(d.getMinutes() < 10 ? '0' : '') +
			d.getMinutes()
	);

	// const EditPortfolio = () => {
	// 	setMiddleHome();
	// };

	const EditPortButton = useRef();

	useEffect(() => {
		// onclick = { EditPortfolio };
		console.log(EditPortButton.current);
		return () => {};
	}, []);

	useEffect(() => {
		console.log(d.getHours());
		setPortUpdateTime(
			(d.getHours() < 10 ? '0' : '') +
				d.getHours() +
				':' +
				(d.getMinutes() < 10 ? '0' : '') +
				d.getMinutes()
		);
		console.log('Portfolio List Updated');
	}, [PortfolioList]);

	return (
		<div className="HomePage">
			<Nav />
			<InfoHeader />
			<div className="PortfolioContainer">
				<h1 className="PortfolioHeader">My Portfolio</h1>
				<span className="UpdateEdit">
					<p className="LastUpdated">{`Last Updated ${PortUpdateTime}`}</p>

					<i
						className="material-icons"
						ref={EditPortButton}
						onclick={EditPortfolio}
					>
						edit
					</i>
				</span>

				<Portfolio />
			</div>

			<div className="Mid">
				<div className="HomePageMiddleSection">
					<Search />
				</div>

				<div className="HomePageMiddleSection">
					<News />
				</div>
			</div>

			<div className="TwitterListContainer">
				<Twitter />
			</div>
		</div>
	);
}

export default HomePage;
