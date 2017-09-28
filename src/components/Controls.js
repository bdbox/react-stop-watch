import React from 'react'

export class Controls extends React.Component {
	render() {
		return (
			<div>
				<button onClick={this.props.startClick}>Start</button>
				<button onClick={this.props.pauseClick}>Pause</button>
				<button onClick={this.props.resetClick}>Reset</button>
			</div>
		)
	}
}