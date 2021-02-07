import React from "react";

class FormContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shipping : {
                address : "",
                zipPostalCode : "",
                city : "",
                country : ""
            },

            billing : {
                address : "",
                zipPostalCode : "",
                city : "",
                country : ""
            },
            isSame : false
        }
    }


    handleInput = ({target}) => {
        let {name, value} = target;

        this.setState(
            ({shipping}) => ({
            shipping : {...shipping, [name] : value}
           
            })
        )

    }

    handleCheck = () => {
        this.setState(({isSame}) => ({
            isSame : !isSame
        })
        )
    }

    render() {
        let isSame = this.state.isSame;
        let shipping = this.state.shipping;
        let billing = isSame ? this.state.shipping : this.state.billing
        return(
            <>
            <div className="col-1-2 form-div">
                <h3>Shipping Address</h3>

                <form>
                    <label>Adresss</label>
                    <input type="text"
                    className="form-input"
                    name="address"
                    placeholder="e.g New Delhi Vasnat Vihar"
                    onChange = {this.handleInput}
                    value = {shipping.address}
                    ></input>

                    <label htmlFor="zipPostalCode">ZIP/Postal Code</label>
                    <input type="text"
                    className="form-input"
                    name="zipPostalCode"
                    placeholder="e.g 176057"
                    onChange = {this.handleInput}
                    value = {shipping.zipPostalCode}
                    ></input>

                    <label className="city">City</label>
                    <input type="text"
                    className="form-input"
                    name="city"
                    placeholder="e.g New Delhi"
                    onChange = {this.handleInput}
                    value = {shipping.city}
                    ></input>

                    
                    <label className="country">Country</label>
                    <input type="text"
                    className="form-input"
                    name="country"
                    placeholder="e.g India"
                    onChange = {this.handleInput}
                    value = {shipping.country}
                    ></input>
                </form>
            </div>

            {/* billing */}

            <div className="col-1-2 form-div">
                <h3>Billing Address</h3>
                <div className="check-address">
                    <label className="checkbox"><input type="checkbox"
                    onChange = {this.handleCheck}
                    ></input>"Same as the Shipping Address?"</label>
                </div>

                <form>
                    <label>Adresss</label>
                    <input type="text"
                    className="form-input"
                    name="address"
                    placeholder="e.g New Delhi Vasnat Vihar"
                    onChange = {this.handleInput}
                    value = {billing.address}
                    ></input>

                    <label htmlFor="zipPostalCode">ZIP/Postal Code</label>
                    <input type="text"
                    className="form-input"
                    name="zipPostalCode"
                    placeholder="e.g 176057"
                    value = {billing.zipPostalCode}
                    ></input>

                    <label className="city">City</label>
                    <input type="text"
                    className="form-input"
                    name="city"
                    placeholder="e.g New Delhi"
                    value = {billing.city}
                    ></input>

                    
                    <label className="country">Country</label>
                    <input type="text"
                    className="form-input"
                    name="country"
                    placeholder="e.g India"
                    value = {billing.country}
                    ></input>
                </form>
            </div>

        </> 
        )
    }
}

export default FormContainer;