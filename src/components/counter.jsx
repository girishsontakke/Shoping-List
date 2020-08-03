import React, { Component} from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <span className={`badge m-2 badge-${this.props.counter.value===0? `warning`:`primary`}`}> {this.formatCount()}</span>
        
        <button 
        className="btn btn-secondary btn-sm"
        onClick={()=>this.props.onIncrement(this.props.counter)} 
        >
        Increment
        </button>

        <button 
        className="btn btn-sm btn-danger m-2"
        onClick={()=>this.props.onDelete(this.props.counter.id)}
        > 
        delete 
        </button>
      </div>
    );
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  }
}

export default Counter;
