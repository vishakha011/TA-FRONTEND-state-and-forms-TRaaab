import React from "react";
import data from "../data/data.json";
import Tags from "./Tags";
import Images from "./Images";


class Match extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeHouse: "",
            selectedPerson: "",
            result: "Let's check how well you know GOT 👑🤴" 

        }
    }

    handleReset = () => {
        this.setState({
            activeHouse: "",
            selectedPerson: "",
            result: "Let's check how well you know GOT 👑🤴"
        })
    }

    handleResult = (activeHouse, selectedPerson) => {
        
        if(activeHouse && selectedPerson) {
            // console.log(activeHouse, selectedPerson)

            let checkResult = data.find(house => house.name === activeHouse)
            .people.includes(selectedPerson);
            console.log(checkResult);

            this.setState({
                result: checkResult ? "It's a Match 🎉🎉" : "Sorry Try Again 😐"
            })
        }
    }

    handleHouse = (house) => {
        this.setState({
            activeHouse: house
        })
        this.handleResult(this.state.selectedPerson, house)
    }

    handlePerson = (person) => {
        this.setState({
            selectedPerson: person
        })
        this.handleResult(this.state.activeHouse, person)
    }

  

    render() {
        // let houseNames = data.map((house) => house.name)
        // console.log(houseNames)
        return(
            <>

            <section className="left-section">
                <div className="options">
                    <ul className="all-tabs flex-center">
                        <Tags 
                            selectFunction = {this.handleHouse}
                            activeHouse = {this.state.activeHouse}
                        />
                    </ul>
                    <hr />
                    <div className="container">
                        <Images 
                            selectFunction = {this.handlePerson}
                            selectedPerson = {this.state.selectedPerson}
                        />
                    </div>
                </div> 
             </section>

             <section className="right-section">
                <h2 className="result">{this.state.result}</h2>
    
                <button className="button"
                onClick= {this.handleReset}> Reset</button>
             </section>
            </>
        )
    }


}


export default Match;