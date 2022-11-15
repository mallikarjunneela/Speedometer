import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {
    speed: 0,
  }

  onAcceleration = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
    if (speed === 200) {
      this.setState(prevState => ({speed: prevState.speed}))
    }
  }
  onBrake = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
    if (speed === 0) {
      this.setState(prevState => ({speed: prevState.speed}))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="speed-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="image"
          alt="speedometer"
        />

        <h1 className="title">Speed is {speed}mph</h1>
        <p className="description">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="button-container">
          <button type="button" className="btn-1" onClick={this.onAcceleration}>
            Accelerate
          </button>
          <button type="button" className="btn-2" onClick={this.onBrake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
