import React, { Component } from "react";
import Counters from "./components/counters";
import Navbar from "./components/navbar";

class All extends Component {
    render() { 
        return (
            <React.Fragment>
                <Navbar/>
                <main className="container">
                    <Counters/>
                </main>
            </React.Fragment>
         );
    }
}
 
export default All;