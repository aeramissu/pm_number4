import React, {Component} from 'react';
import BusinessCard from "./BusinessCard"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstN: "",
      lastN: "",
      add: "",
      eMail: "",
      phoneNum: "",
      firstname: 'rose',
      lastname: 'daganasol',
      address: "cebu",
      email: "roseaira",
      phoneNumber: "09051022488",
      register: false
    }
  }

  handleRegister = (e) => {
    e.preventDefault();
    if(this.state.firstN === this.state.firstname && this.state.lastN === this.state.lastname && this.state.add === this.state.address && this.state.eMail === this.state.email && this.state.phoneNum === this.state.phoneNumber) {
      this.setState({register: true});
    }else {
      this.setState({register: false});
      alert("something doesn't match")
    }
  }

  render() {
    if (!this.state.register) {
      return(
        <center>
          <div>Firstname:<input type="text" onChange ={e => this.setState({firstN: e.target.value})}/></div>
          <div>Lastname<input type="text" onChange ={e => this.setState({lastN: e.target.value})}/></div>
          <div>Address:<input type="text" onChange ={e => this.setState({add: e.target.value})}/></div>
          <div>Email:<input type="text" onChange ={e => this.setState({eMail: e.target.value})}/></div>
          <div>Phone Number:<input type="text" onChange ={e => this.setState({phoneNum: e.target.value})}/></div>
          <div><button onClick = {e => this.handleRegister(e)}>Register</button></div>
        </center>
      )
    } else {
      return(
        <div>
          <BusinessCard fname = {this.state.firstN} lname = {this.state.lastN} addr = {this.state.add} Email = {this.state.eMail} num = {this.state.phoneNum}/>
        </div>
      )
    }
  }
}

export default App;