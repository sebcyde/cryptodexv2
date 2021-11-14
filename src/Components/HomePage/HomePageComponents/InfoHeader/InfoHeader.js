import React, { useEffect, useState } from 'react';
import './InfoHeader.css';
import axios from 'axios';

function InfoHeader() {
	const Trending = [];
	const [FinalHeader, setFinalHeader] = useState(<span></span>);
	const Test = [];

	useEffect(() => {
		axios
			.get('https://api.coingecko.com/api/v3/search/trending')
			.then((response) => {
				response.data.coins.map((TrendingCoins) => {
					axios
						.get(
							`https://api.coingecko.com/api/v3/coins/${TrendingCoins.item.id}`
						)
						.then((secondresponse) => {
							Trending.push(secondresponse.data);
						});
				});
			});
	}, []);

	useEffect(() => {
		setFinalHeader(
			Trending.map((Coins) => {
				<span className="TrendingContainer">
					<h2>`${Coins.symbol}:`</h2>
					<h3>`$${Coins.market_data.current_price.usd}`</h3>
					<h3>
						`$
						{Coins.market_data.price_change_percentage_24h_in_currency.usd}
						%`
					</h3>
				</span>;
				return Test;
			})
		);

		console.log(FinalHeader);
		console.log(Test);
	}, []);

	return (
		<div id="scroll-container">
			<div id="scroll-text">
				It has survived not only five centuries, but also the leap into
				electronic typesetting, remaining essentially unchanged. It was
				popularised
			</div>
		</div>
	);
}

export default InfoHeader;
