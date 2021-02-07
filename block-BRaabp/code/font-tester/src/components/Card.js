function Card(props) {
    return (
        <>
        <article className="card">
            <div className="title-style flex-between">
                <h2>{props.data.title}</h2>
                <span >{props.data.style} styles</span>
            </div>
            <div className="author">
                <p className="style-author">{props.data.author}</p>
            </div>
            <div className="style">
                <p 
                className="styled-text"
                style = {{fontFamily : props.data.font}}
                >{props.text ? props.text :"Type Something" }</p>
            </div>
        </article>
        </>
    )
}

export default Card;