import React, { Component } from 'react';

export class DisplayName extends Component {
  render() {
    let message = ''
    if(this.props.name.length === 0) {
      message = ""
    } else {
      message = this.props.name
    }

    return (
      <div className="component">
      {message}
      </div>
    )
  }
}
