import React, { useEffect } from 'react';
import axios from 'axios';

function News() {
	useEffect(() => {
		axios
			.get('https://api.coingecko.com/api/v3/search/trending')
			.then((response) => {
				console.log(response.data);
				console.log('News request sent');
			});
	}, []);

	return (
		<div className="NewsContainer">
			<div>
				<h1>News</h1>
				<h2>Test Text</h2>
			</div>
		</div>
	);
}

export default News;
