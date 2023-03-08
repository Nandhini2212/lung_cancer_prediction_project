import axios from "axios";
import React, { Component } from "react";
class UpdateValues extends Component {
    constructor(props){
        super(props);
        this.state={
            name:" ",
            age:" ",
            smoking:" ",
            yellow_fingers:" ",
            wheezing:" ",
        }
    }
handlenameChange = (event) => {
    this.setState({ name:event.target.value});
}

handleageChange = (event) => {
    this.setState({ age:event.target.value});
}
handlesmokingChange = (event) => {
    this.setState({ smoking:event.target.value});
}
handleyellowfingersChange = (event) => {
    this.setState({ yellow_fingers:event.target.value});
}
handlewheezingChange = (event) => {
    this.setState({ wheezing:event.target.value});
}


handleSubmit = (event) =>{
    event.preventDefault();
    const data = {
        name : this.state.name,
        age:this.state.age,
        smoking:this.state.smoking,
        yellow_fingers:this.state.yellow_fingers,
        wheezing:this.state.wheezing,      
    }
    axios.put('http://127.0.0.1:8080/update',data)
};
render(){
    return ( 
        <form onSubmit={this.handleSubmit} className="ge" align="center">
            <label className="login-label">name</label><br/>
            <input
                className="login-input" 
                type="text" 
                value={this.state.id}
                onChange ={this.handlenameChange}
            /><br/><br/>

            <label className="login-label">Age</label><br/>
            <input
                className="login-input" 
                type="text" 
                value={this.state.actor}
                onChange ={this.handleageChange}
            /><br/><br/>

            <label className="login-label">smoking</label><br/>
            <input
                className="login-input" 
                type="text" 
                value={this.state.actress}
                onChange ={this.handlesmokingChange}
            /><br/><br/>

            <label className="login-label">yellow_fingers</label><br/>
            <input
                className="login-input" 
                type="text" 
                value={this.state.director}
                onChange ={this.handleyellowfingersChange}
            /><br/><br/>

            <label className="login-label">wheezing</label><br/>
            <input
                className="login-input" 
                type="text" 
                value={this.state.moviename}
                onChange ={this.handlewheezingChange}
            /><br/><br/>
            
            <button className="login-button" type="submit" style={{padding:10,color:"blue"}}> Submit </button>
        </form>
    );
  }
}

export default UpdateValues;