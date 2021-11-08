import React from 'react';
import { TwitterTimelineEmbed, TwitterTweetEmbed } from 'react-twitter-embed';
import './Twitter.css';

function Twitter() {
	return (
		<div className="Twitter">
			<TwitterTimelineEmbed
				sourceType="profile"
				screenName="Reuters"
				options={{ width: 300 }}
				noScrollbar={true}
				theme="dark"
			/>
		</div>
	);
}

export default Twitter;
