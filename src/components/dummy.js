import React, { Component } from 'react'
class Dummy extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }
  componentDidMount() {
    console.log('Mounted, ')
  }
  componentDidUpdate() {
    console.log('Updated with new state', this.state.counter)
  }
  render() {
    const { counter } = this.state
    return (
      <>
        <h1>Howdy!</h1>
        <button onClick={() => {
          this.setState({ counter: counter + 1 })
        }}>Click Me</button>
        <button onClick={() => this.setState({ counter: 0})}>Reset</button>
        <h2>You done clicked {counter} times</h2>
      </>
    )
  }
}
export default Dummy