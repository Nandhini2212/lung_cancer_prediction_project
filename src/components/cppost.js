import axios from "axios";
import React, { Component } from "react";
class PostValues extends Component {
    constructor(props){
        super(props);
        this.state={
            name:" ",
            age:" ",
            smoking:" ",
            yellow_fingers:" ",
            wheezing:" ",
            
        };
    }
handleNameChange = (event) => {
    this.setState({ name:event.target.value});
}

handleAgeChange = (event) => {
    this.setState({ age:event.target.value});
}
handleSmokingChange = (event) => {
    this.setState({ smoking:event.target.value});
}
handleYellowfingersChange = (event) => {
    this.setState({ yellow_fingers:event.target.value});
}
handleWheezingChange = (event) => {
    this.setState({ wheezing:event.target.value});
}


handleSubmit = (event) =>{
    event.preventDefault();
    const data = {
        name : this.state.name,
        age:this.state.age,
        smoking:this.state.smoking,
        yellow_fingers:this.state.yellow_fingers,
        wheezing:this.state.wheezing
               
    }
    axios.post('http://127.0.0.1:8080/post',data)
};
render(){
    return ( 
        <div className="gel">
        <form onSubmit={this.handleSubmit} className="login-form" align="center">
            <label className="login-label">Name</label><br/>
            <input
                className="login-input" 
                type="text" 
                value={this.state.name}
                onChange ={this.handleNameChange}
            /><br/><br/>

            <label className="login-label">Age</label><br/>
            <input 
                className="login-input" 
                type="text" 
                value={this.state.age}
                onChange ={this.handleAgeChange}
            /><br/><br/>

            <label className="login-label">Smoking</label><br/>
            <input 
                className="login-input" 
                type="text" 
                value={this.state.smoking}
                onChange ={this.handleSmokingChange}
            /><br/><br/>

            <label className="login-label">yellow_fingers</label><br/>
            <input
                className="login-input" 
                type="text" 
                value={this.state.yellow_fingers}
                onChange ={this.handleYellowfingersChange}
            /><br/><br/>

            <label className="login-label">wheezing</label><br/>
            <input 
                className="login-input" 
                type="text" 
                value={this.state.wheezing}
                onChange ={this.handleWheezingChange}
            /><br/><br/>
             
            <button className="login-button" type="submit" style={{padding:10,color:"blue"}} > Submit </button>
        </form>
        </div>
    );
  }
}

export default PostValues;