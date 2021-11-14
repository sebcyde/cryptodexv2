if (SearchResult.length > 0) {
	for (let x = SearchResult.length; x < 0; x--) {
		SearchResult.pop;
	}
	SearchResult.push(
		<div>
			<span>
				<img src={response.data[0].image} className="TickerImage" />
				<h2>{response.data[0].name}</h2>
			</span>
			<span className="TickerStats">
				<h3 className="TickerPrice">{response.data[0].current_price}</h3>
				<h3 className="TickerChange">
					{response.data[0].price_change_percentage_24h}
				</h3>
			</span>
		</div>
	);
} else {
	SearchResult.push(
		<div>
			<span>
				<img src={response.data[0].image} className="TickerImage" />
				<h2>{response.data[0].name}</h2>
			</span>
			<span className="TickerStats">
				<h3 className="TickerPrice">{response.data[0].current_price}</h3>
				<h3 className="TickerChange">
					{response.data[0].price_change_percentage_24h}
				</h3>
			</span>
		</div>
	);
}
