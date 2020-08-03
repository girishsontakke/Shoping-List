import React, { Component } from "react";
import Counters from "./components/counters";
import Navbar from "./components/navbar";

class All extends Component {
    state = { 
        counters : [
            { id:1, value:0 },
            { id:2, value:0 },
            { id:3, value:0 },
            { id:4, value:0 }
        ]
    };
    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(c=>c.id!==counterId);
        this.setState({counters});
    };

    handleIncrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter}
        counters[index].value++;
        this.setState({ counters });
    };

    handleReset = () =>{
        const counters = this.state.counters.map(c =>{
            c.value = 0;
            return c;
        })
        this.setState({ counters });
    };
    render() { 
        return (
            <React.Fragment>
                <Navbar/>
                <main className="container">
                    <Counters
                        counters = {this.state.counters}
                        onIncrement = {this.handleIncrement}
                        onDelete={this.handleDelete}
                        onReset={this.handleReset}
                    />
                </main>
            </React.Fragment>
         );
    }
}
 
export default All;