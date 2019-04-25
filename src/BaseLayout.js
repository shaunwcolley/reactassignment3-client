import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

export class Header extends Component {
  render(){
    return (
      <div className="header">
        <ul>
          <li><NavLink to="/" className="navlink">Home</NavLink></li>
          <li><NavLink to="/view-all-books" className="navlink">View Books</NavLink></li>
          <li><NavLink to="/add-book" className="navlink">Add Book</NavLink></li>
        </ul>
      </div>
    )
  }
}
export class Footer extends Component {
  render(){
    return (
      <div className="footer">
        Copyright 2019
      </div>
    )
  }
}

export class BaseLayout extends Component {
  render(){
    return (
      <div className="body">
        <Header />
          {this.props.children}
        <Footer />
      </div>
    )
  }
}
