import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            isHidden : false
        }
    }

    handleClick = () => {
        this.setState((prevState) => {
            return{
                isHidden : !prevState.isHidden
            }
        })
    }

    render(){
        return (
            <>
            <header className={"sidebar " + (this.state.isHidden ? "hidden" : "")}>
                <div className="navbar">
                    <ul className="nav">
                        <li className="nav-item"><a href="#home">Home</a></li>
                        <li className="nav-item"><a href="#home">Contact</a></li>
                        <li className="nav-item"><a href="#home">About</a></li>
                    </ul>
                </div>
                
                <button className="button" onClick= {this.handleClick}>{this.isHidden ? <this.Footer/> : "Hide"}</button>
             
                
            </header>
            <main>
                <div className="container">
                    <h1>This is the main Body</h1>
                </div>
            </main>

            <footer>
                <this.Footer />
            </footer>
            </>
        )
    }

    Footer = (props) => {
        return(
            <>
                <button className="button-show" onClick= {this.handleClick}>Show</button>
            </>
        )
    }
}

export default App;