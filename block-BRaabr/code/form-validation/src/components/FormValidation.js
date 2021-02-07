import React from "react";

class FormValidation extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            inputText: "",
            email: "",
            password: "",
            confirmPassword: "",

            errors: {
                inputText: "",
                email: "",
                password: "",
                confirmPassword: ""
            }
        }
    }


    validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email)
    }

    validatePassword = (password) => {
        return password.length >=8;
    }

    handleInput =({target}) => {
        let {name, value} = target;
        let errors = this.state.errors;

        switch (name) {
            case "email":
                errors.email =this.validateEmail(value) ? "" : "Email is not valid"
            break;

            case "password":
                errors.password =this.validatePassword(value) ? "" : "Password must be atleast 6 characters"
            break;

            case "confirmPassword":
                errors.confirmPassword = (value !== this.state.password) ? "Password does not match" : "";
            break;
            default:
                break;

        }

        this.setState({
            [name] : value,
            errors: errors
        })
    }


    handleSubmit = (event) => {
        event.preventDefault();
        alert(`Submitted Info : ${this.state.inputText}
         ${this.state.email} 
         ${this.state.password} 
         ${this.state.confirmPassword} `)
    }

    render() {
        let errors = this.state.errors;
        return (
            <>
            <form onSubmit={this.handleSubmit} action="/login" method="POST">

                <div className="form-div">
                    <label htmlFor="username">Username</label>
                    <input 
                    className="form-input"
                    type="text" 
                    name="inputText" 
                    placeholder="Username" 
                    value = {this.state.inputText}
                    onChange={this.handleInput}/>                    
                </div>

                <div className="form-div">
                    <label htmlFor="email">Email</label>
                    <input type="email" 
                    className={"form-input " + (errors.email && "error") }
                    name="email" 
                    placeholder="Email Address"
                    value = {this.state.email}
                    onChange={this.handleInput}/>
                    errors.email ? <span>{errors.email} </span> : ""
                </div>

                <div className="form-div">
                    <label htmlFor="password">Password</label>
                    <input type="password" className={"form-input " + (errors.password && "error") } 
                    name="password" 
                    placeholder="Password"
                    value = {this.state.password}
                    onChange={this.handleInput}/>
                    errors.password ? <span>{errors.password} </span> : ""
                </div>

                <div className="form-div">
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input type="password" 
                    className={"form-input " + (errors.confirmPassword && "error") }
                    name="confirmPassword" 
                    placeholder="Password"
                    value = {this.state.confirmPassword}
                    onChange={this.handleInput}/>
                    errors.confirmPassword ? <span>{errors.confirmPassword} </span> : ""
                </div>

                <input type="submit" className="form-input btn" name="submit" value="Submit"/>

            </form>
            </>
        )
    }
}

export default FormValidation;