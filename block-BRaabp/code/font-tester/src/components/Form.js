function Form(props) {
    return (
        <>
        <div className="toolbar">
                   <form className="modifier flex">
                       <div className="text-modifier flex">
                       <select className="select-option">
                           <option>Custom</option>
                           <option>Sentence</option>
                           <option>Alphabet</option>
                       </select>
                       <input 
                       className="text" 
                       type="text" 
                       placeholder="Type Something"
                       onChange={props.inputFunction}
                       ></input>
                       </div>
                       <div className="border"></div>
                       <div className ="range-modifier">
                            <select className="select-font">
                                <option>40px</option>
                                <option>18px</option>
                                <option>30px</option>
                            </select>
                            <input className="range" type="range" placeholder=""></input>
                        </div>
                   </form>
               </div>
        </>
    )
}

export default Form;