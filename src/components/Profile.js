import React, { Component } from 'react';
import axios from 'axios'

class Profile extends Component {
  _isMounted = false;
  constructor(props){
    super(props)
    this.state = {
      user: {},
      userItem: '',
      url: "http://localhost:8080" + this.props.match.url,
      message: ''
    }
  }

  componentDidMount(){
    this._isMounted = true
    axios.get(this.state.url)
    .then(response => {
      this.setState({
        user: response.data
      })
    })
    .then(() => {
      if(this._isMounted) {
        let user = this.state.user
        let userItem = (
          <div>
            <h5>Username: {user.userName}</h5>
            <h5>Email: {user.email}</h5>
          </div>
        )
        this.setState({
          userItem: userItem
        })
      }
    })
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  handleTextBoxChange = (e) => {
    this.setState({
      user: {
        userName: this.state.user.userName,
        email: e.target.value
      }
    })
  }

  handleUpdateEmailClick = () => {
    axios.post(this.state.url, {
      email: this.state.user.email
    }).then(response => {
      this.setState({
        message: response.data.message
      })
    })
  }

  render() {
    return (
      <div>
        <h2>Profile</h2>
        <div className="component">
          <h3>Update Email:</h3>
          <input type="text" onChange={this.handleTextBoxChange} placeholder={this.state.user.email} name="email" />
          <button onClick={this.handleUpdateEmailClick}>Update Email</button>
        </div>
        <div className="component">
          {this.state.userItem}
        </div>
        {this.state.message}

      </div>
    )
  }
}

export default Profile
