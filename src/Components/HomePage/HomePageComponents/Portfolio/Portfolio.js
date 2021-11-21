import React, { useState, useEffect } from 'react';
import './Portfolio.css';
import LoadingSymbol from '../../../LoadingSymbol/LoadingSymbol.js';
import axios from 'axios';
import ATP from '../Search/ATP/ATP';

function Portfolio() {
	const [PortfolioList, setPortfolioList] = useState(LoadingSymbol);
	const [Price, setPrice] = useState(LoadingSymbol);
	// const [GetPrices, setGetPrices] = useState(Prices);
	const Port = [];
	const PortAPIQuery = [];

	function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	useEffect(() => {
		// Port.map((PortfolioItems, index) => {
		// 	console.log(PortfolioItems);
		// 	axios
		// 		.get(
		// 			`https://api.coingecko.com/api/v3/simple/price?ids=${PortfolioItems.id}&vs_currencies=usd&include_24hr_change=true`
		// 		)
		// 		.then((response) => {
		// 			console.log(response.data);
		// 			PortAPIQuery.push(response.data);
		// 		});
		// 	let Name = capitalizeFirstLetter(PortfolioItems.id);
		// 	console.log(index);
		// 	console.log(PortAPIQuery);
		// 	return (
		// 		<div key={index} className="ReturnedPortListNames">
		// 			<span>
		// 				<LoadingSymbol />
		// 				<h2 className="AssetName">{Name}</h2>
		// 			</span>
		// 			<span>
		// 				<p className="AssetPrice">${index}</p>
		// 				<p className="AssetVolume">{index} Vol.</p>
		// 			</span>
		// 		</div>
		// 	);
		// });
		console.log(Port);
		Port.push('bitcoin', 'ethereum', 'shitcoin', 'ocean', 'rsr');
		console.log(Port);
	}, []);

	useEffect(() => {
		setInterval(() => {
			setPortfolioList(
				Port.map((PortfolioItems, index) => {
					axios
						.get(
							`https://api.coingecko.com/api/v3/simple/price?ids=${PortfolioItems}&vs_currencies=usd&include_24hr_change=true`
						)
						.then((response) => {
							PortAPIQuery.push(response.data);
							console.log(PortAPIQuery);
						});
					let Name = capitalizeFirstLetter(PortfolioItems);

					return (
						<div key={index} className="ReturnedPortListNames">
							<span>
								<LoadingSymbol />
								<h2 className="AssetName">{Name}</h2>
							</span>

							<span>
								<p className="AssetPrice">${index}</p>
								<p className="AssetVolume">{index} Vol.</p>
							</span>
						</div>
					);
				})
			);

			console.log('Portfolio Updated');
		}, 5000);
	}, []);

	return <div>{PortfolioList}</div>;
}

export default Portfolio;

// EditPortButton.onClick(() => {
// 	console.log('editing Portfolio');
// });
