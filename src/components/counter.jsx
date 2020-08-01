import React, { Component, Fragment } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <Fragment>
        <span className={`badge m-2 badge-${this.state.count===0? `warning`:`primary`}`}> {this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </Fragment>
    );
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "zero" : count;
  }
}

export default Counter;
