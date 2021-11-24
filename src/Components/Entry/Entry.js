import React from 'react';
import './Entry.css';
import 'materialize-css';
import { Row, Col, ProgressBar } from 'react-materialize';

function Entry() {
	let x = 0;

	setTimeout(() => {
		let x = 24;
	}, 1000);

	setTimeout(() => {
		let x = 80;
	}, 2200);

	setTimeout(() => {
		let x = 100;
	}, 3000);

	return (
		<Row className="Entry">
			<Col s={12}>
				<ProgressBar progress={x} />
			</Col>
		</Row>
	);
}

export default Entry;

// https://d9hhrg4mnvzow.cloudfront.net/marketing.exness.com/crypto/c8d0cf0b-bitcoin-gif.gif
// progress={70}
