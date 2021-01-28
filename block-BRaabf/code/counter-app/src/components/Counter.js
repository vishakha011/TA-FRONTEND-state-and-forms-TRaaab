import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            counter : 0,
            step: 1
        }
    }

    handleStep = (num) => {
        this.setState({
            step: num
        })
    }
    

    handleIncrement = () => {
        this.setState({
            counter : this.state.counter + this.state.step
        })
    }

    handleDecrement = () => {
        this.setState({
            counter : this.state.counter - this.state.step
        })
    }

    handleReset = () => {
        this.setState({
            counter : 0
        })
    }



    render() {
        return (
            <>
            <div className="container">
                <h1 className="counter">{this.state.counter}</h1>

                    {/* Steps */}
                    <div className="steps">
                        <h2>Steps</h2>
                        <span className={this.state.step === 5 ? "active" : ""} onClick={() => this.handleStep(5)}>5</span>

                        <span onClick={() => this.handleStep(5)} className={this.state.step === 10 ? "active" : ""}>10</span>
                        <span onClick={() => this.handleStep(5)} className={this.state.step === 15 ? "active" : ""}>15</span>
                    </div>
                   
                    <p>Selected Step : {this.state.step}</p>
                    <button onClick = {this.handleIncrement}>Increment</button>
                    <button onClick = {this.handleDecrement}>Decrement</button>
                    <button onClick = {this.handleReset}>Reset</button>
            </div>
            
            </>
        )
    }
}


export default Counter;