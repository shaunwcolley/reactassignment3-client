import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

export class Header extends Component {
  render(){
    return (
      <div className="header">
        <div><NavLink to="/" className="navlink">Home</NavLink></div>
        <div className="viewAllLink"><NavLink to="/view-all-books" className="navlink">View Books</NavLink></div>
        <div><NavLink to="/add-book" className="navlink">Add Book</NavLink></div>
      </div>
    )
  }
}
export class Footer extends Component {
  render(){
    return (
      <div className="footer">
        <h5>Images posted are not property of this site, they belong to the linked source and were posted by users.</h5><h5>Copyright 2019</h5>
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
