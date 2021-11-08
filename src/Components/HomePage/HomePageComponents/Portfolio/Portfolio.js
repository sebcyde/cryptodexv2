import React, { useState, useEffect } from 'react';
import './Portfolio.css';
import LoadingSymbol from '../../../LoadingSymbol/LoadingSymbol.js';
import axios from 'axios';

function Portfolio() {
	const [PortfolioList, setPortfolioList] = useState(LoadingSymbol);
	const [Prices, setPrices] = useState(LoadingSymbol);

	const Port = [];
	const PortAPIQuery = '';

	const Bitcoin = {
		id: 'btc',
		price: 100,
		volume: 20000,
	};

	const Ethereum = {
		id: 'eth',
		price: 3000,
		volume: 15000,
	};

	Port.push(Bitcoin, Ethereum);

	function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	useEffect(() => {
		axios
			.get('https://api.coingecko.com/api/v3/coins/list')
			.then((response) => {
				console.log(response.data);
				response.data.map((Coin) => {
					if (Coin.id === 'bitcoin') {
						Port.push(Coin);
						console.log('Pushed Bitcoin');
						console.log(Port);
					}
				});
			})
			.then(() => {
				setPortfolioList(
					Port.map((PortfolioItems, index) => {
						let Name = capitalizeFirstLetter(PortfolioItems.id);
						console.log(Name);
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
