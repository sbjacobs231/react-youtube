import React, { Component } from 'react';
import '../styles/related_video_list.css';
import RelatedVideo from './related_video';

export class RelatedVideoList extends Component {
	render() {
		const videoList = this.props.videoList;
		return (
			<div className="list">
				{videoList.map(video => {
					return (
						<RelatedVideo
							onChangeVideo={this.props.onChangeVideo}
							key={video.id.videoId}
							videoDetails={video}
						/>
					);
				})}
			</div>
		);
	}
}

export default RelatedVideoList;
