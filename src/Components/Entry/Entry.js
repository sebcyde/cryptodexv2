import React from 'react';
import './Entry.css';
import 'materialize-css';
import { Row, Col, ProgressBar } from 'react-materialize';

function Entry() {
	let current_progress = 0;
	let interval = setInterval(function () {
		current_progress += 30;

		if (current_progress >= 100) clearInterval(interval);
	}, 1000);

	return (
		<Row className="Entry">
			<Col s={12}>
				<ProgressBar progress={70} />
			</Col>
		</Row>
	);
}

export default Entry;

// https://d9hhrg4mnvzow.cloudfront.net/marketing.exness.com/crypto/c8d0cf0b-bitcoin-gif.gif
// progress={70}
