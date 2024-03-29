import React from 'react';
import './Nav.css';

function Nav() {
	Date.prototype.today = function () {
		return (
			(this.getDate() < 10 ? '0' : '') +
			this.getDate() +
			'/' +
			(this.getMonth() + 1 < 10 ? '0' : '') +
			(this.getMonth() + 1) +
			'/' +
			this.getFullYear()
		);
	};

	Date.prototype.timeNow = function () {
		return (
			(this.getHours() < 10 ? '0' : '') +
			this.getHours() +
			':' +
			(this.getMinutes() < 10 ? '0' : '') +
			this.getMinutes() +
			':' +
			(this.getSeconds() < 10 ? '0' : '') +
			this.getSeconds()
		);
	};
	let newDate = new Date().today();
	let newTime = new Date().timeNow();

	return (
		<div className="Nav">
			<span className="NavData">
				<span className="NavDate">{newDate}</span>
				<span className="NavTime">{newTime}</span>
			</span>
		</div>
	);
}

export default Nav;
