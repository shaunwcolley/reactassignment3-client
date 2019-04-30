import React, { Component } from 'react';
import { connect } from 'react-redux'

class Register extends Component {
  constructor() {
    super()
    this.state = {
      userName: '',
      pass: ''
    }
  }

  handleTextBoxChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmitClick = () => {
    let credentials = this.state
    fetch('http://localhost:8080/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    }).then((response) => {
      console.log(response)
      this.props.history.push('/login')
    })
  }
  render() {
    return (
      <div className="component">
        <h4>Register</h4>
        <input type='text' placeholder='User Name' onChange={this.handleTextBoxChange} name="userName"/>
        <input type='password' placeholder='password' onChange={this.handleTextBoxChange} name="pass"/>
        <button onClick={() => this.handleSubmitClick()}>Submit</button>
      </div>
    )
  }
}

export default Register
