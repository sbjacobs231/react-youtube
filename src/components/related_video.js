import React, { Component } from 'react';
import '../styles/related_video.css';

export class RelatedVideo extends Component {
	updateVideo() {
		this.props.onChangeVideo(this.props.videoDetails);
	}

	render() {
		const videoDetails = this.props.videoDetails.snippet;
		const thumbnail = videoDetails.thumbnails.medium.url;
		const title = videoDetails.title;
		const author = videoDetails.channelTitle;

		return (
			<div onClick={this.updateVideo.bind(this)} className="video-container">
				<img src={thumbnail} alt="" />
				<div className="video-details">
					<h5>
						<strong>{title}</strong>
					</h5>
					<span>{author}</span>
				</div>
			</div>
		);
	}
}

export default RelatedVideo;
