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
	let PortAPIQuery = [];

	// Function to capitalise first letter of items displayed in portfolio
	function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	// Example placeholder portfolio items
	useEffect(() => {
		Port.push('bitcoin', 'ethereum', 'shitcoin', 'ocean');
	}, []);

	useEffect(() => {
		setPortfolioList(
			Port.map((PortfolioItems, index) => {
				axios
					.get(
						`https://api.coingecko.com/api/v3/simple/price?ids=${PortfolioItems}&vs_currencies=usd&include_24hr_change=true`
					)
					.then((response) => {
						PortAPIQuery.push(response.data);
						console.log(PortAPIQuery[0]);
						console.log(PortAPIQuery[1]);
						console.log(PortAPIQuery[2]);
						console.log(PortAPIQuery[3]);
						console.log(PortAPIQuery.PortfolioItems);
					});

				let Name = capitalizeFirstLetter(PortfolioItems);

				return (
					<div key={index} className="ReturnedPortListNames">
						<span>
							<LoadingSymbol />
							<h2 className="AssetName">{Name}</h2>
						</span>

						<span>
							<p className="AssetPrice">{PortAPIQuery.index}</p>
							<p className="AssetVolume">{index} Vol.</p>
						</span>
					</div>
				);
			})
		);
	}, []);

	useEffect(() => {
		setInterval(() => {
			setPortfolioList('');
			let PortAPIQuery = [];
			setPortfolioList(
				Port.map((PortfolioItems, index) => {
					axios
						.get(
							`https://api.coingecko.com/api/v3/simple/price?ids=${PortfolioItems}&vs_currencies=usd&include_24hr_change=true`
						)
						.then((response) => {
							PortAPIQuery.push(response.data);
							console.log(PortAPIQuery[0]);
							console.log(PortAPIQuery[1]);
							console.log(PortAPIQuery[2]);
							console.log(PortAPIQuery[3]);
						});

					let Name = capitalizeFirstLetter(PortfolioItems);

					return (
						<div key={index} className="ReturnedPortListNames">
							<span>
								<LoadingSymbol />
								<h2 className="AssetName">{Name}</h2>
							</span>

							<span>
								<p className="AssetPrice">{PortAPIQuery.index}</p>
								<p className="AssetVolume">{index} Vol.</p>
							</span>
						</div>
					);
				})
			);

			console.log('Portfolio Updated');
		}, 10000);
	}, []);

	return <div>{PortfolioList}</div>;
}

export default Portfolio;

// EditPortButton.onClick(() => {
// 	console.log('editing Portfolio');
// });
