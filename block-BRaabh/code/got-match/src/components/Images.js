import data from "../data/data.json"

function Images(props) {
    let people = data.reduce((acc, house) =>{
        return acc.concat(house.people);
    }, [])

    return(
        <>
            {people.map((person) => 
                <img src={person.image} 
                alt = {person.description}
                onClick= {() => props.selectFunction(person)}
                key = {person.name}
                className={"img " + (person === props.selectedPerson ? "active" : "")}
                />
            )}
            
        </>
    )
}



export default Images;
