import React, { Component } from 'react';

export class ViewBookList extends Component {
  constructor() {
    super()

    this.state = {
      books: [],
      bookItems: []
    }
  }
  componentDidMount() {
    this.booksFetch()
  }

  booksFetch = () => {
    let url = "http://localhost:8080/api/books"
    fetch(url)
    .then(response => response.json())
    .then(json => {
      this.setState({
        books: json
      })
    }).then( () => {
      let books = this.state.books
      let bookStateItems = books.map((book) => {
        return (
               <li key={book.id}>
                <h4>{book.title}</h4>
                <button onClick={()=>this.handleDeleteClick(book.id)}>Remove</button>
                <h5>{book.genre}</h5>
                <h5>{book.publisher}</h5>
                <h5>{book.year}</h5>
                <img src={book.imageURL} alt=""/>
               </li>
             )
      })
      this.setState({
        bookItems: bookStateItems,
      })
    })
  }

  handleDeleteClick = (bookID) => {
    let deleteID = parseInt(bookID)
    fetch('http://localhost:8080/api/delete-book', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({deleteID: deleteID})
    }).then(()=> {
      this.booksFetch()
    })
  }

  render() {
    return(
      <div> <ul className="bookUl">{this.state.bookItems}</ul></div>
    )
  }
}
