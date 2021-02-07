import FormContainer from "./FormContainer";

function App() {
    return(
        <>
        <header className="header">
            <div className="conatiner">
            <h1 className="title">📑 Learning About forms</h1>
            <p className="sub-title">Controlled vs Uncontrolled Component</p>
            </div>
        </header>

        <section className="container">
            <h2 className="heading">Controlled Component</h2>

            <div className="form-container">
                <FormContainer />
            </div>
        </section>
        </>
    )
}

export default App;