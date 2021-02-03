import React from "react";

import Tags from "../components/Tags"

class App extends React.Component {
    render() {
        return (
            <>
            <header className= "header">
                <h1 className="heading">Our Menu</h1>
            </header>
            <div></div>
            <Tags />
            </>
        )
    }
}


export default App;