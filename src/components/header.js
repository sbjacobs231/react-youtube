import React, { Component } from 'react';
import '../styles/header.css';

export class Header extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };
	}

	onInputChange(term) {
		this.setState({ term });
	}

	onEnter() {
		this.props.onSearchTermChange(this.state.term);
	}

	render() {
		return (
			<div>
				<img
					src="https://www.youtube.com/yts/img/yt_1200-vfl4C3T0K.png"
					alt=""
				/>
				<div className="form-group inner-addon right-addon">
					<i className="glyphicon glyphicon-search" />
					<input
						type="text"
						className="form-control"
						value={this.state.term}
						onChange={event => this.onInputChange(event.target.value)}
						onKeyUp={event => {
							if (event.key === 'Enter') {
								this.onEnter();
							}
						}}
					/>
				</div>
			</div>
		);
	}
}

export default Header;
