import {Component} from "react"
//import React from "react"

var a=()=>{

}
//class Signup extends React.Component {
class Signup extends Component {

    constructor(props){
        super(props)
        this.state = {
            users:0
        }
        console.log(".......Value of the constructor is", props, this.props);
    }
    shouldComponentUpdate(){
        return false
    }
    joinMeeting = ()=>{
        console.log("Value of the operator is", this)
        this.setState({
            users:this.state.users+1,
            //users:100,
            errorMessage:"Error in joining!! Please Contact Admin!!"
        })
    }
    render(){
        return(
            <div>
                <button onClick={this.joinMeeting} className="btn btn-primary">Join Meeting</button>
                <label> Hey {this.props.name + " !! " + this.state.users} joined the Meeting</label>
            {this.state.errorMessage && <label className="alert alert-danger">{this.state.errorMessage}</label> }
            </div>
        )
    }
}
// class Signup from Component

export default Signup