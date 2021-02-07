import React from "react";
import Header from "./Header";
import Form from "./Form";
import Card from "./Card";
import data from "../data/data.json";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            inputText : ""
        }
    }

    handleText = (event) => {
        this.setState({
            inputText : event.target.value
        })
        console.log(this.state.inputText)
    }


    render(){
        return (
            <>
            < Header />
            
            <main>
               <Form inputFunction = {this.handleText}/>

               
               <section className="cards-section flex-wrap container grid">
                    {data.map((fontFamily) => {
                        return (
                            <>
                            <Card text= {this.state.inputText} data = {fontFamily}/>
                            </>
                        )
                    })}
               </section>
            </main>

            <footer>
                
            </footer>
            </>
        )
    }

   
}

export default App;