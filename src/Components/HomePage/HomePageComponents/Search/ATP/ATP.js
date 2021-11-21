import axios from 'axios';
import React, { useEffect } from 'react';
import Port from '../../Portfolio/Portfolio.js';
import ValueToAdd from '../Search.js';

function ATP() {
	console.log(ValueToAdd);
	axios
		.get(`https://api.coingecko.com/api/v3/coins/${ValueToAdd}`)
		.then((response) => {
			console.log(response.data);
			Port.push(response.data);
			console.log(Port);
		});
}

export default ATP;
