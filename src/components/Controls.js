import React from 'react'

export class Controls extends React.Component {
	render() {
		return (
			<div class="controls">
				<button onClick={this.props.startClick}>Start</button>
				<span>|</span>
				<button onClick={this.props.pauseClick}>Pause</button>
				<span>|</span>
				<button onClick={this.props.resetClick}>Reset</button>
			</div>
		)
	}
}