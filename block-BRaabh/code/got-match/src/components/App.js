import React from "react"

import Header from "./Header";
// import Tags from "./Tags";
// import Images from "./Images";
import Match from "./Match"

class App extends React.Component {
    render() {
        return (
            <>
               <Header />
               <main className="flex-between">
                   {/* <Tags /> */}
                   {/* <Images /> */}
                   <Match />
               </main>
            </>
        )
    }
}





export default App;