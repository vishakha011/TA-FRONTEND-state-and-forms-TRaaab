function Card(props) {
    return (
        <>
        {props.allItems.map((food) => {
            return(
                <>
                    <article className="article flex">
                        <div className="img-responsive">
                            <img src = {food.img} alt={food.title}></img>
                        </div>

                        <div className="info">
                            <h2 className="foot-item-name">{food.title}</h2>
                            <hr />
                            <p className="description">{food.desc}</p>
                        </div>
                    </article> 
                </>
            )
        })}
        
        </>
    )
}

export default Card;