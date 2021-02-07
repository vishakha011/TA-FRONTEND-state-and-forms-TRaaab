import FormInput from "./FormInput";
import FormValidation from "./FormValidation";


function App() {
        return( 
            <>
            <div className="container flex">
                <div className="col-1-2">
                    <div className="top-text">
                        <p>Multiple Input Elements</p>
                    </div> 
    
                    <FormInput />
                    
                </div>
    
            {/* Validation */}
                <div className="col-1-2">
                    <div className="top-text">
                        <p>Register with Us</p>
                    </div> 
    
                    < FormValidation />
                </div>
            </div>
            </>
        )

    
}

export default App