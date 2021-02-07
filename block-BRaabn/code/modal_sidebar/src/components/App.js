import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            toggleSidebar : false,
            showmodal : false

        }
    }

    handleToggleSidebar = () => {
        this.setState((prevState) => {
            return {
                toggleSidebar : !prevState.toggleSidebar
            }
        })
    }

    handleModal = () => {
        this.setState((prevState) => {
            return{
                showmodal : !prevState.showmodal
            }
        })
    }


    handleView = (toggle, close) => {
        if(toggle && close) {
            return "show-sidebar"
        }
    }

    render(){
        return (
            <>
             <main>
                <button className="sidebar-toggle"
                onClick={this.handleToggleSidebar}>
                    <i className="fas fa-bars"></i>
                
                </button>
                <button className="btn" onClick= {this.handleModal}>Show Modal</button>
            </main>
            <div 
                className={"modal-overlay " + (this.state.showmodal ? "show-modal" : "")}>
                    <this.Modal />
            </div>
            
            <this.Sidebar />
            </>
            )
    }
   
      
    Sidebar = () => {
        return (
            <>
            <aside className={"sidebar " + (this.state.toggleSidebar ? "show-sidebar" : "")}>
                <div className="sidebar-header">
                    <h1 className="logo">Coding Addict</h1>
                    <button className="close-btn"
                    onClick={this.handleToggleSidebar}>
                            <i className="fas fa-times"></i>
                    </button>
                </div>
                <ul className="links">
                    <li><a href= "#home"><i className="fas fa-home"></i>Home</a></li>
                    <li><a href= "#team"><i className="fas fa-user-friends"></i>Team</a></li>
                    <li><a href= "#projects"><i className="fas fa-folder-open"></i>Projects</a></li>
                    <li><a href= "#calender"><i className="fas fa-calendar-alt"></i>Calender</a></li>
                    <li><a href= "#documents"><i className="far fa-file-alt"></i>Documents</a></li>
                </ul>

                <ul className="social-icons">
                    <li><i className="fab fa-facebook"></i></li>
                    <li><i className="fab fa-twitter"></i></li>
                    <li><i className="fab fa-linkedin"></i></li>
                    <li><i className="fab fa-behance"></i></li>
                    <li></li>
                </ul>
            </aside>
            </>
        )
    }

    Modal = () => {
        return (
            <>
            <div className="modal-container">
                <h3>Modal Content</h3>
                <button className="close-modal-btn" onClick= {this.handleModal}><i className="fas fa-times"></i></button>
            </div>
            </>
        )
    }
}


export default App;