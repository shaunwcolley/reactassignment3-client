import React, { Component } from 'react';
import axios from 'axios'

class Profile extends Component {

  handleTextBoxChange = (e) => {
    console.log(e.target.value)
  }

  render() {
    return (
      <div>
        <h2>Profile</h2>
        <div className="component">
          <h3>Update Email:</h3>
          <input type="text" onChange={this.handleTextBoxChange} placeholder="email" name="email" />
          <button onClick={this.handleUpdateEmailClick}>Update Email</button>
        </div>
        <div className="component">
          <h4></h4>
          <ul></ul>
        </div>

      </div>
    )
  }
}

export default Profile
