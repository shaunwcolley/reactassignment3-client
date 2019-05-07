import React, { Component } from 'react';
import axios from 'axios'

export class UpdateBook extends Component {

  constructor() {
    super()
    this.state = {
      book: '',
      title: '',
      genre: '',
      publisher: '',
      year: '',
      imageURL: ''
    }
  }

  handleTextBoxClick = (e) => {
    if (e.target.value === e.target.name) {
      this.setState({
        [e.target.name]: ''
      })
    }
  }

  handleTextBoxChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  componentDidMount() {
    this.booksFetch()
  }

  booksFetch = () => {
    let url = "http://localhost:8080" + this.props.match.url
    fetch(url)
    .then(response => response.json())
    .then(json => {
      this.setState({
        book: json
      })
    }).then( () => {
      let book = this.state.book
      let bookStateItem = (
               <li key={book.id}>
                <h4>{book.title}</h4>
                <h5>{book.genre}</h5>
                <h5>{book.publisher}</h5>
                <h5>{book.year}</h5>
                <img src={book.imageURL} alt=""/>
               </li>
            )
      this.setState({
        bookItems: bookStateItem
      })
    })
  }

  handleUpdateBookClick = () => {
    let url = "http://localhost:8080" + this.props.match.url
    axios.post(url, {
      book: this.state.book,
      title: this.state.title,
      genre: this.state.genre,
      publisher: this.state.publisher,
      year: this.state.year,
      imageURL: this.state.imageURL
    }).then(()=>{
      this.booksFetch()
    })
  }

  render() {
    return (
      <div>
        <div className="component">
          <h3>Add a Book:</h3>
          <input type="text" onChange={this.handleTextBoxChange} placeholder={this.state.book.title} name="title" />
          <input type="text" onChange={this.handleTextBoxChange} placeholder={this.state.book.genre} name="genre" />
          <input type="text" onChange={this.handleTextBoxChange} placeholder={this.state.book.publisher} name="publisher" />
          <input type="text" onChange={this.handleTextBoxChange} placeholder={this.state.book.year} name="year" />
          <input type="text" onChange={this.handleTextBoxChange} placeholder={this.state.book.imageURL} name="imageURL" />
          <button onClick={this.handleUpdateBookClick}>Update Book</button>
        </div>
        <div className="component">
          <h4>Book:</h4>
          <ul>{this.state.bookItems}</ul>
        </div>
      </div>
    )
  }
}
