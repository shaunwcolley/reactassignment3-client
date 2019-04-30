import React, { Component } from 'react';

class Register extends Component {
  constructor() {
    super()
    this.state = {
      userName: '',
      pass: '',
      message: ''
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
    }).then((response) => response.json()).then(json => {
      if(json.success){
        this.props.history.push('/login')
      } else if(!json.success) {
        this.setState({
          ...this.state,
          message: json.message
        })
      }
    })
  }
  render() {
    return (
      <div className="component">
        <h4>Register</h4>
        <input type='text' placeholder='User Name' onChange={this.handleTextBoxChange} name="userName"/>
        <input type='password' placeholder='password' onChange={this.handleTextBoxChange} name="pass"/>
        <button onClick={() => this.handleSubmitClick()}>Submit</button>
        {this.state.message}
      </div>
    )
  }
}

export default Register
