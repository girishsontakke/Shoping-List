import React, { Component} from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
    tags: ['tag1', 'tag2', 'tag3']
  };

  render() {
    return (
      <div>
        <span className={`badge m-2 badge-${this.state.value===0? `warning`:`primary`}`}> {this.formatCount()}</span>
        <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "zero" : value;
  }

  renderList(){
    if (this.state.tags.length === 0) return `Tags List is Empty`;

    return <ul> {this.state.tags.map((tag, i) => <li key={i}>{tag}</li>)}</ul>
  }

  handleIncrement = () => this.setState({value:this.state.value+1});
}

export default Counter;
