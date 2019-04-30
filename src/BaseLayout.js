import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'

export class Header extends Component {
  render(){
    return (
      <div className="header">
        <div><NavLink to="/" className="navlink">Home</NavLink></div>
        <div className="viewAllLink"><NavLink to="/view-all-books" className="navlink">View All Books</NavLink></div>
        {this.props.isAuthenticated ? <div><NavLink to="/add-book" className="navlink">Add Book</NavLink></div> : null }
        {!this.props.isAuthenticated ? <div><NavLink to="/register" className="navlink">Register</NavLink></div> : null}
        {!this.props.isAuthenticated ? <div><NavLink to="/login" className="navlink">Login</NavLink></div> : null}
        {this.props.isAuthenticated ? <div className="navlink">Books: {this.props.bookCount} </div> : null }
        {this.props.isAuthenticated ? <button className="navlink" onClick={() => this.props.onSignOut()}>Sign Out </button> : null }
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

class BaseLayout extends Component {
  render(){
    return (
      <div className="body">
        <Header isAuthenticated = {this.props.isAuth} bookCount={this.props.bookCount} onSignOut= {() => this.props.onSignOut()}/>
          {this.props.children}
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    bookCount: state.bookCount,
    isAuth: state.isAuth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSignOut: () => dispatch({type: 'SIGN_OUT'})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(BaseLayout)
