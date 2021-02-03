
import data from "../data/data.json"


function Tags(props){
    let houseNames = data.map((house) => house.name)
        return(
            <>     
            {houseNames.map((house) => 
            
                <li 
                className={"house " + (house === props.activeHouse ? "active" : "")} 
                id={house} 
                key ={house} onClick = {() => props.selectFunction(house)}>
                    {house}
                </li>
            )}
            </>
        )    
            
        
            }  



  



export default Tags;