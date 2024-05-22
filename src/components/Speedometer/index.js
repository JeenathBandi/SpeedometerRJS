// Write your code here
import './index.css'
import {Component} from 'react'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelerate = () => {
    let {speed} = this.state
    this.setState(prevState => {
      if (prevState.speed < 200) {
        speed = prevState.speed + 10
      } else {
        speed = prevState.speed
      }
      console.log(speed)
      return {speed}
    })
  }

  onApplyBreak = () => {
    let {speed} = this.state
    this.setState(prevState => {
      if (prevState.speed > 0) {
        speed = prevState.speed - 10
      } else {
        speed = prevState.speed
      }
      console.log(speed)
      return {speed}
    })
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg-container">
        <h1>SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="img"
        />
        <h1 className="description">Speed is {speed}mph</h1>
        <p className="description-2">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="but">
          <button onClick={this.onAccelerate} className="btn1">
            Accelerate
          </button>
          <button onClick={this.onApplyBreak} className="btn2">
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
