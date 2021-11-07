import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Portfolio() {
	const [PortfolioList, setPortfolioList] = useState(<h1>Empty Portfolio</h1>);

	const Port = [];

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
						console.log(PortfolioItems.id);
						return (
							<div>
								<h2 key={index}>{PortfolioItems.id}</h2>
							</div>
						);
					})
				);
			});
	}, []);

	return <div>{PortfolioList}</div>;
}

export default Portfolio;
