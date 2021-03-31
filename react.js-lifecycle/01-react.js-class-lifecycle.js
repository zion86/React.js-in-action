import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      date: new Date(),
      count: 0,
    }

    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');

    this.tickID = setInterval(() => this.tick(), 1000);
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');

    clearInterval(this.tickID);
  }

  tick = () => {
    this.setState(({ date, count }) => ({
      date: new Date(),
      count: count += 1,
    }))
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');

    return this.state.count < 10;
  }

  render() {
    console.log('render');

    return (
      <>
        <Clock time={this.state.date.toLocaleTimeString()} />
        <h2>Count: {this.state.count}</h2>
      </>
    )
  }
}

export default App;

const Clock = ({ time }) => {
  return (
    <h2>{time}</h2>
  )
}