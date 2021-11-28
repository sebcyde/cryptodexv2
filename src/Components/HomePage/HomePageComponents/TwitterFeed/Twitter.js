import React, { useRef, useState } from 'react';
import { TwitterTimelineEmbed, TwitterTweetEmbed } from 'react-twitter-embed';
import './Twitter.css';

function Twitter() {
	const SearchTerm = useRef('');
	const [Twit, setTwit] = useState(
		<TwitterTimelineEmbed
			sourceType="profile"
			screenName="Reuters"
			options={{ width: 300 }}
			noScrollbar={true}
			theme="dark"
		/>
	);

	const SearchTweets = (event) => {
		event.preventDefault();
		console.log(`Searching Tweets for ${SearchTerm.current.value}`);
		setTwit('');
		setTwit(
			<TwitterTimelineEmbed
				sourceType="profile"
				screenName={`${SearchTerm.current.value}`}
				options={{ width: 300 }}
				noScrollbar={true}
				theme="dark"
			/>
		);

		// setTwit();
	};

	return (
		<div className="Twitter">
			<form className="TwitterForm">
				<input
					type="text"
					className="TwitterInput"
					placeholder="Search Profiles"
					ref={SearchTerm}
				/>
				<input type="submit" className="TwitterSubmit" onClick={SearchTweets} />
			</form>

			{Twit}
		</div>
	);
}

export default Twitter;
