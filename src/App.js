import React, { Component } from 'react';
import logo from './images/logo.svg';
import './styles/app.css';
import {Display} from './components/Display'
import {Controls} from './components/Controls'

class App extends Component {
	constructor() {
		super()
		this.state = {
			hour: 0,
			minute: 0,
			second: 0,
			millisecond: 0,
			intervalId: null
		}
	}
	
	render() {
		return (
		  <div className="App">
			<div className="App-header">
			  <img src={logo} className="App-logo" alt="logo" />
			</div>
			<div>
				<Display value = {this.state}/>
				<Controls 
					startClick = {this.clickStart.bind(this)}
					pauseClick = {this.clickPause.bind(this)}
					resetClick = {this.clickReset.bind(this)}
				/>
			</div>
		  </div>
		)
	}
	
	clickStart() {
		let hr = this.state.hour, 
			min = this.state.minute, 
			sec = this.state.second,
			msec = this.state.millisecond
		this.state.intervalId = setInterval(() => {
			msec = msec + 10
			if (msec >= 1000) {
				msec = 0
				sec++
			}
			if (sec >= 60 ) {
				sec = 0
				min++
			}
			if (min >= 60 ) {
				min = 0
				hr++
			}
			if (hr >= 24) {
				hr = 0
			}
			this.setState({
				hour: hr,
				minute: min,
				second: sec,
				millisecond: msec
			})
		}, 10);
	}
	
	clickPause() {
		clearInterval(this.state.intervalId)
	}
	
	clickReset() {
		clearInterval(this.state.intervalId)
		this.setState({
			hour: 0,
			minute: 0,
			second: 0,
			millisecond: 0,
			intervalId: null
		})
	}
}

export default App;
