function FormInput() {
    return (
        <>
        <form action="/login" method="POST">
                    <div className="form-div">
                        <label htmlFor="text">Input Text</label>
                        <input className="form-input" type="text" name="text" placeholder="Name"/>
                    </div>

                    <div className="form-div">
                        <label htmlFor="date">Date Input</label>
                        <input className="form-input" type="date" name="date" placeholder=""/>
                    </div>

                    <div className="form-div">
                        <label htmlFor="file">file Input</label>
                        <input type="file" className="form-input" name="file"  multiple/>
                    </div>

                    <div className="form-div">
                        <label htmlFor="read">read-Only Input</label>
                        <input type="text" className="form-input" name="read" placeholder="This can only be copied" readOnly/>
                    </div>

                    <div className="form-div">
                        <label htmlFor="disable-input">Disabled Input</label>
                        <input type="text" className="form-input" name="disable-input" disabled/>
                    </div>

                    <div className="form-div">
                    <label htmlFor="textarea">Textarea</label>
                    <textarea name="textarea"></textarea>
                    </div>

                    <div className="form-div">
                    <label htmlFor="disable-textarea">Textarea Disabled</label>
                    <textarea name="disable-textarea" disabled></textarea>
                    </div>


                    <input type="submit" className="form-input btn" name="submit" value="submit"/>

                </form>
        </>
    )
}

export default FormInput;