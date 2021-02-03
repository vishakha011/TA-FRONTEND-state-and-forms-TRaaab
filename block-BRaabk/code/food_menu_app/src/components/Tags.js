import React from "react";
import data from "../data/data.json";
import Card from "./Card"


class Tags extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeTag : "all"
        }
    }

    handleTag = (tag) => {
        this.setState({
            activeTag : tag
        })
    }

    render() {
        let allItems;
        if(this.state.activeTag === "all") {
             allItems = data;
            console.log(allItems)
        }
        else {
            allItems = data.filter((item) => item.category === this.state.activeTag)
            console.log(allItems)
        }
        
        return (
            <>  
            <ul className="tag-container flex-between">
                <li 
                    className={"tag " + (this.state.activeTag === "all" ? "active" : "")}
                    onClick = {() => {this.handleTag("all")}}
                >All</li>
                <li 
                    className={"tag " + (this.state.activeTag === "breakfast" ? "active" : "")}
                    onClick = {() => {this.handleTag("breakfast")}}
                >Breakfast</li>
                <li 
                    className={"tag " + (this.state.activeTag === "lunch" ? "active" : "")}
                    onClick = {() => {this.handleTag("lunch")}}
                >Lunch</li>
                <li 
                    className={"tag " + (this.state.activeTag === "shakes" ? "active" : "")}
                    onClick = {() => {this.handleTag("shakes")}}
                >Shakes</li>    
            </ul>   

            <section className="container grid">
                < Card allItems = {allItems}/> 
            </section>     
            </>
        )
    }

}


export default Tags