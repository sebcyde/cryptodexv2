import React, { useEffect, useState } from 'react';
import './InfoHeader.css';
import axios from 'axios';

function InfoHeader() {
	const Trending = [];
	const TrendingCleanData = [];
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
							console.log(secondresponse.data);
							Trending.push(secondresponse.data);
							// Trending.map((Coins) => {
							// 	TrendingCleanData.push(
							// 		<span className="TrendingContainer" key={Coins}>
							// 			<p className="Symbol">{Coins.symbol}:</p>
							// 			<p className>{Coins.market_data.current_price.usd}</p>
							// 			<p>
							// 				{
							// 					Coins.market_data
							// 						.price_change_percentage_24h_in_currency.usd
							// 				}
							// 				%
							// 			</p>
							// 		</span>
							// 	);
							// 	return TrendingCleanData;
							// });
						});
				});
				console.log(Trending);
				console.log(TrendingCleanData);
			});
	}, []);

	return (
		<div id="scroll-container">
			<div id="scroll-text">
				{/* {Trending.map((Coins) => {
					return (
						<span className="TrendingContainer" key={Coins}>
							<p className="Symbol">{Coins.symbol}:</p>
							<p className>{Coins.market_data.current_price.usd}</p>
							<p className="PriceChange">
								{Coins.market_data.price_change_percentage_24h_in_currency.usd}%
							</p>
						</span>
					);
				})} */}
				It is a long established fact that a reader will be distracted by the
				readable content of a page when looking at its layout. The point of
				using Lorem Ipsum is that it has a more-or-less normal distribution of
				letters, as opposed to using 'Content here, content here', making it
				look like readable English.
			</div>
		</div>
	);
}

export default InfoHeader;
