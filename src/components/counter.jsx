import React, { Component, Fragment } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ['tag1', 'tag2', 'tag3']
  };
  // constructor(){
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }
  // handleIncrement() {
  //   console.log("Increment Clicked", this.state.count);
  // }

  handleIncrement = () => console.log(
    "Increment clicked", this.state.count
  );

  renderList(){
    if (this.state.tags.length === 0) return `Tags List is Empty`;

    return <ul> {this.state.tags.map((tag, i) => <li key={i}>{tag}</li>)}</ul>
  }
  render() {
    return (
      <Fragment>
        <span className={`badge m-2 badge-${this.state.count===0? `warning`:`primary`}`}> {this.formatCount()}</span>
        {this.renderList()}
        <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
      </Fragment>
    );
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "zero" : count;
  }
}

export default Counter;
