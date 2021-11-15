import './Search.css';
import React, { useRef, useState } from 'react';
import axios from 'axios';
import { JSCharting } from 'jscharting-react';
import ChartBuilder from './ChartBuilder/ChartBuilder.js';

function Search() {
	const [SearchChart, setSearchChart] = useState(ChartBuilder);
	const [SearchReturn, setSearchReturn] = useState();
	const SearchTerm = useRef('');

	const Search = (event) => {
		event.preventDefault();
		axios
			.get(
				`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${SearchTerm.current.value}&order=market_cap_desc&per_page=10&page=1&sparkline=false`
			)
			.then((response) => {
				console.log(response.data);

				setSearchReturn(
					<div>
						<span className="TickerImageAndName">
							<h2 className="TickerName">{response.data[0].name}</h2>
							<img src={response.data[0].image} className="TickerImage" />
						</span>
						<span className="TickerStats">
							<h3 className="TickerPrice">
								Price: ${response.data[0].current_price}
							</h3>
							<h3 className="TickerChange">
								24 Hour Change: {response.data[0].price_change_percentage_24h}%
							</h3>
						</span>
					</div>
				);
			});

		axios.get(
			`https://api.coingecko.com/api/v3/coins/${SearchTerm.current.value}/market_chart?vs_currency=usd&days=30`
		);
		// .then((response) => {
		// 	console.log(response.data);
		// 	console.log(response.data.prices);

		// 	const config = {
		// 		type: 'line',
		// 		// data: response.data.prices,
		// 		series: [
		// 			{
		// 				points: [
		// 					{ x: 'A', y: 50 },
		// 					{ x: 'B', y: 30 },
		// 					{ x: 'C', y: 50 },
		// 				],
		// 			},
		// 		],
		// 	};

		// 	const divStyle = {
		// 		maxWidth: '700px',
		// 		height: '400px',
		// 		margin: '0px auto',
		// 	};

		// 	setSearchChart(
		// 		<div style={divStyle}>
		// 			<JSCharting options={config} />
		// 		</div>
		// 	);
		// });

		SearchTerm.current.value = '';
	};

	return (
		<div className="Search">
			<form className="SearchForm">
				<input
					type="text"
					placeholder="Search Ex. Bitcoin..."
					ref={SearchTerm}
					className="SearchInput"
				/>
				<input
					type="submit"
					value="Search"
					onClick={Search}
					className="SearchSubmitButton"
				/>
			</form>
			{SearchReturn}
			<div className="ChartContainer" id="chartDiv">
				{SearchChart}
			</div>

			<div className="SearchResponseContainer">
				<div className="TickerNews">
					It is a long established fact that a reader will be distracted by the
					readable content of a page when looking at its layout. The point of
					using Lorem Ipsum is that it has a more-or-less normal distribution of
					letters, as opposed to using 'Content here, content here', making it
					look like readable English. Many desktop publishing packages and web
					page editors now use Lorem Ipsum as their default model text, and a
					search for 'lorem ipsum' will uncover many web sites still in their
					infancy. Various versions have evolved over the years, sometimes by
					accident, sometimes on purpose (injected humour and the like).
				</div>
			</div>
		</div>
	);
}

export default Search;
