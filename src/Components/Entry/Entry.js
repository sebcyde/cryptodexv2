import React from 'react';
import './Entry.css';
import 'materialize-css';
import { Row, Col, ProgressBar } from 'react-materialize';

function Entry() {
	return (
		<Row className="Entry">
			<Col s={12}>
				<ProgressBar />
			</Col>
		</Row>
	);
}

export default Entry;

// https://d9hhrg4mnvzow.cloudfront.net/marketing.exness.com/crypto/c8d0cf0b-bitcoin-gif.gif
// progress={70}
