import React, { Component } from 'react';

export class InputName extends Component {
  constructor() {
    super()
    this.state = {
      name: ''
    }
  }

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleSaveName = () => {
    this.props.handleSaveNameCallback(this.state.name)
    this.setState({
      name: ''
    })
  }

  render() {
    return (
      <div className="component">
          <input type="text" onChange={this.handleNameChange} value={this.state.name} />
          <button onClick={this.handleSaveName}>Diplay Name</button>
      </div>
    )
  }
}
