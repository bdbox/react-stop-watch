import React from 'react'

export class Display extends React.Component {
	render() {
		return (
			<div class="display">
				<span class="dt">{this.formatTime(this.props.value.hour)}</span>
				<span class="seperator"> : </span>
				<span class="dt">{this.formatTime(this.props.value.minute)}</span>
				<span class="seperator"> : </span>
				<span class="dt">{this.formatTime(this.props.value.second)}</span>
				<span class="seperator">&nbsp;&nbsp;&nbsp;</span>
				<span class="milli">{this.formatMillisecond(this.props.value.millisecond)}</span>
			</div>
		)
	}
	
	formatTime(val) {
		if (val >= 0 && val <= 9) {
			return "0" + val;
		} else {
			return val
		}
	}
	
	formatMillisecond(val) {
		if (val >= 0 && val <= 9) {
			return "00" + val
		} else if (val >= 10 && val <= 99){
			return "0" + val
		} else {
			return val
		}
	}
}