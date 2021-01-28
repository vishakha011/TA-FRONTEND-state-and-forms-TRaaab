import React from "react";
 


class Buttons extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            imageUrl: "",
            imageAtl: ""
        }
        
        this.data = {
            buttons: [
                {
                    name: "BasketBall",
                    img : "/images/basketball.jpg"
                },

                {
                    name: "Tiger",
                    img : "/images/tiger.jpg"
                },

                {
                    name: "Phone",
                    img : "/images/phone.jpg"
                },

                {
                    name: "Laptop",
                    img : "/images/laptop.jpg"
                },
                {
                    name: "Cricket",
                    img : "/images/cricket.jpeg"
                }

            ]
            
        }
    }

    handleClick = (button) => {
        this.setState({
            imageUrl: button.img,
            imageAtl: button.name
        })
    }

    render(){
        return (
            <>
            <div className= "container">
                <div className= "button-container flex-between">
                    {this.data.buttons.map((button, index) => (
                        <this.Button key = {index} {...button}/>
                    ))}
                </div>
                <div className="image-container">
                    <img src ={this.state.imageUrl} alt ={this.state.imageAtl}></img>
                </div>
            </div>
            </>
        )
    }

    Button = (props) =>{
        return(
            <>
            <button onClick = {() =>this.handleClick(props)}>{props.name}</button>
            </>
        )
    }
    
}







export default Buttons;