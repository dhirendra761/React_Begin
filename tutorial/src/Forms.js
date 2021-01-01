import React from 'react';
//import "./App.css";
class Forms extends React.Component{
    constructor(){
        super();
        this.state={
            user:null,
            password:null
        }
    }
    onChangeInput=(e)=>{
        this.setState({[e.target.name]:e.target.value});
        console.log([e.target.name])
    }
    submit=()=>{
        console.log(this.state);
    }
    render(){
        return(
            <div>
                <h1 className="form">Forms Component</h1>
                <input type="text" name="user" onChange={this.onChangeInput}/>
                <br/><br/>
                <input type="password" name="password" onChange={this.onChangeInput}/>
                <br/><br/>
                <button name="submit" onClick={this.submit}>Submit</button>
            </div>
        )
    }
}

export default Forms;