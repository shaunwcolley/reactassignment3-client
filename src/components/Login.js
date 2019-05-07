import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios'

class Login extends Component {
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

  handleLoginClick = () => {
    let userName = this.state.userName
    let pass = this.state.pass
    axios.post('http://localhost:8080/login', {
      userName: userName,
      pass: pass
    }).then((response) =>  {
      if(response.data.success) {
        let token = response.data.token
        let userId = response.data.userId
        localStorage.setItem('jsonwebtoken', token)
        this.props.onSignIn(token,userId)
        this.props.history.push('/view-all-books')
      } else if (!response.data.success) {
        this.setState({
          ...this.state,
          message: response.data.message
        })
      }
    })
  }

  render() {
    return (
      <div className="component">
        <h4>Login</h4>
        <input type='text' placeholder='User Name' onChange={this.handleTextBoxChange} name="userName"/>
        <input type='password' placeholder='password' onChange={this.handleTextBoxChange} name="pass"/>
        <button onClick={this.handleLoginClick}>Login</button>
        {this.state.message}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSignIn: (token,userId) => dispatch({type: 'SIGN_IN', token: token, userId: userId})
  }
}

export default connect(null, mapDispatchToProps)(Login)
