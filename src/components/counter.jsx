import React, { Component, Fragment } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ['tag1', 'tag2', 'tag3']
  };
  
  render() {
    return (
      <Fragment>
        <span className={`badge m-2 badge-${this.state.count===0? `warning`:`primary`}`}> {this.formatCount()}</span>
        <ul>
          {this.state.tags.map((tag, i)=> <li key={i}>{tag}</li>)}
        </ul>
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
