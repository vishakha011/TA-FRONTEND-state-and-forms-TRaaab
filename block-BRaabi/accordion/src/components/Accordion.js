import React from "react";
import data from "../data/data.json";
// import 'font-awesome/css/font-awesome.min.css';

class Accordions extends React.Component {
    constructor(props) {
        super(props);
        this.state =  {
            activeQuestion : "",
            activeTab : false
        }
    }


    handleActiveTab = (accordion, index) => {
        console.log(index)
        this.setState({
            activeQuestion : accordion.Q,
            activeTab : !this.state.activeTab
        })
    }

    render() {
        return (
            <>
            <div className="container">
                {data.map((accordion, index) => (
                    <>
                    <div className="accordian">
                        <div className="question flex-between"
                        key = {index}
                        onClick = {() => this.handleActiveTab(accordion, index)}
                        > 
                            <h2>{accordion.Q} </h2> 
                            <span className= {this.state.activeTab ? "fas fa-angle-up" : "fas fa-angle-down"}></span>
                      
                        </div>
                        <div className={"answer " + ((this.state.activeQuestion=== accordion.Q && this.state.activeTab) ? "active" : "")}
                        key = {index}
                        >{accordion.A}</div>
                        
                    </div>
                    
                    </>
                    
                ))}
            </div>
            
            </>
        )
    }
}


export default Accordions

