import React, { Component } from 'react';
import '../styles/current_video.css';

export class CurrentVideo extends Component {
	render() {
		const videoDetails = this.props.videoDetails;
		if (!this.props.videoDetails) {
			return <div>Loading...</div>;
		}
		return (
			<div className="tupper">
				<div className="embed-responsive embed-responsive-16by9">
					<iframe
						title="current video"
						className="embed-responsive-item"
						src={`https://www.youtube.com/embed/${videoDetails.id.videoId}`}
					/>
				</div>
				<div>
					<h3>{videoDetails.snippet.title}</h3>
					<h4>Channel: {videoDetails.snippet.channelTitle}</h4>
					<p>Description: {videoDetails.snippet.description}</p>
				</div>
			</div>
		);
	}
}

export default CurrentVideo;
