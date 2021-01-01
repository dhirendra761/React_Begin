import React from 'react';
//import "./App.css";
import Styles from "./App.module.css";
class FormValidation extends React.Component{
    constructor(){
        super();
        this.state={
            user:null,
            password:null,
            errorUser:"",
            errorPassoword:""
        }
    }
    onChangeInput=(e)=>{
        this.setState({[e.target.name]:e.target.value});
        console.log([e.target.name])
    }
    valid(){
        if(!this.state.user.includes("@") && this.state.password.length<5){
            this.setState({errorUser:"Invalid User",errorPassoword:"Password is too small" });
        }
        else if(!this.state.user.includes("@")){
            this.setState({errorUser:"Invalid User" });
        }
        else if(this.state.password.length<5){
            this.setState({errorPassoword:"Password is too small" });
        }
        else {
            return true;
        }
        
    }
    submit=()=>{
        if(this.valid()){
            console.log("form submit")
        }
    }
    render(){
        return(
            <div>
                <h1 className={Styles.form}>Forms Component</h1>
                <input type="text" name="user" onChange={this.onChangeInput}/>
                <p style={{color:"red",fontSize:"20px",margin:0}}>{this.state.errorUser}</p>
                <br/><br/>
                <input type="password" name="password" onChange={this.onChangeInput}/>
                <p style={{color:"red",fontSize:"20px",margin:0}}>{this.state.errorPassoword}</p>
                <br/><br/>
                <button name="submit" onClick={this.submit}>Submit</button>
            </div>
        )
    }
}

export default FormValidation;