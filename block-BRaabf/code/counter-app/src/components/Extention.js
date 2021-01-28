import React from "react";

class Extension extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            counter : 0,
            step: 1,
            maxValue: Infinity

        }
    }

    handleStep = (num) => {
        this.setState({
            step: num
        })
    }

    handleMaxValue = (value) => {
        this.setState({
            maxValue: value
        })
    }
    

    handleIncrement = () => {
        this.setState({
            counter : this.state.counter < this.state.maxValue ? this.state.counter + this.state.step : this.state.maxValue && alert("cannot exceed max value")
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
                <div className="functionality flex-between">
                    {/* Steps */}
                    <div className="steps">
                        <h2>Steps</h2>
                        <span className={this.state.step === 5 ? "active" : ""} onClick={() => this.handleStep(5)}>5</span>

                        <span onClick={() => this.handleStep(10)} className={this.state.step === 10 ? "active" : ""}>10</span>

                        <span onClick={() => this.handleStep(15)} className={this.state.step === 15 ? "active" : ""}>15</span>
                        <p>Selected Step : {this.state.step}</p>
                    </div>

                    {/* Max Value */}
                    <div className="steps">
                        <h2>Max-Value</h2>
                        <span className={this.state.maxValue === 15 ? "active" : ""} onClick={() => this.handleMaxValue(15)}>15</span>

                        <span onClick={() => this.handleMaxValue(100)} className={this.state.maxValue === 100 ? "active" : ""}>100</span>

                        <span onClick={() => this.handleMaxValue(200)} className={this.state.maxValue === 200 ? "active" : ""}>200</span>
                        <p>Selected Max-value : {this.state.maxValue}</p>
                    </div>
                </div>
                   
                    
                    <button onClick = {this.handleIncrement}>Increment</button>
                    <button onClick = {this.handleDecrement}>Decrement</button>
                    <button onClick = {this.handleReset}>Reset</button>
            </div>
            
            </>
        )
    }
}


export default Extension;