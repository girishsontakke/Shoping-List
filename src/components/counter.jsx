import React, { Component} from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ['tag1', 'tag2', 'tag3']
  };

  render() {
    return (
      <div>
        <span className={`badge m-2 badge-${this.state.count===0? `warning`:`primary`}`}> {this.formatCount()}</span>
        <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "zero" : count;
  }

  renderList(){
    if (this.state.tags.length === 0) return `Tags List is Empty`;

    return <ul> {this.state.tags.map((tag, i) => <li key={i}>{tag}</li>)}</ul>
  }

  handleIncrement = () => this.setState({count:this.state.count+1});
}

export default Counter;
