import React, { Component } from 'react';

import YTSearch from 'youtube-api-search';
import './App.css';
import API_KEY from './config/keys';

import Header from './components/header';
import CurrentVideo from './components/current_video';
import RelatedVideoList from './components/related_video_list';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null
		};

		this.videoSearch('surfing');
	}

	videoSearch(term) {
		YTSearch({ key: API_KEY, term }, videos => {
			this.setState({
				videos,
				selectedVideo: videos[0]
			});
		});
	}

	updateSelectedVideo(video) {
		this.setState({
			selectedVideo: video
		});
	}

	render() {
		return (
			<div className="App container">
				<Header onSearchTermChange={this.videoSearch.bind(this)} />
				<CurrentVideo videoDetails={this.state.selectedVideo} />
				<RelatedVideoList
					videoList={this.state.videos}
					onChangeVideo={this.updateSelectedVideo.bind(this)}
				/>
			</div>
		);
	}
}

export default App;
