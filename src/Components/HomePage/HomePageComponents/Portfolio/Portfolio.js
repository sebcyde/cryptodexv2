import React, { useState, useEffect } from 'react';
import './Portfolio.css';
import LoadingSymbol from '../../../LoadingSymbol/LoadingSymbol.js';
import axios from 'axios';
import EditPortButton from '../../HomePage.js';

function Portfolio() {
	const [PortfolioList, setPortfolioList] = useState(LoadingSymbol);
	const [Prices, setPrices] = useState(LoadingSymbol);

	const Port = [];
	const PortAPIQuery = '';

	function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	// EditPort.onClick(() => {
	// 	console.log('editing Portfolio');
	// });

	useEffect(() => {
		axios
			.get('https://api.coingecko.com/api/v3/coins/list')
			.then((response) => {
				response.data.map((Coin) => {
					if (Port.length < 7 && Coin.id.length < 7) {
						Port.push(Coin);
					}
				});
			})
			.then(() => {
				console.log(Port);
				setPortfolioList(
					Port.map((PortfolioItems, index) => {
						let Name = capitalizeFirstLetter(PortfolioItems.id);
						return (
							<div key={index} className="ReturnedPortListNames">
								<h2 className="AssetName">{Name}</h2>
								<h2 className="AssetPrice">{Prices}</h2>
							</div>
						);
					})
				);
			})
			.then(() => {
				axios.get(
					'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum&vs_currencies=usd&include_24hr_change=true'
				);
			});
	}, []);

	return <div>{PortfolioList}</div>;
}

export default Portfolio;
