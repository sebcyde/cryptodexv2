import React from 'react';
import { JSCharting } from 'jscharting-react';

function ChartBuilder() {
	const config = {
		type: 'line',
		series: [
			{
				points: [
					{ x: 'A', y: 50 },
					{ x: 'B', y: 30 },
					{ x: 'C', y: 50 },
				],
			},
		],
	};

	const divStyle = {
		maxWidth: '700px',
		height: '400px',
		margin: '0px auto',
	};

	return (
		<div style={divStyle}>
			<JSCharting options={config} />
		</div>
	);
}

export default ChartBuilder;
