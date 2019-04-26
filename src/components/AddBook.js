import React, { Component } from 'react';

export class AddBook extends Component {

  constructor () {
    super()
    this.state = {
    title: 'title',
    genre: 'genre',
    publisher: 'publisher',
    year: 'year',
    imageURL: 'imageURL'
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

  handleSaveBookClick = () => {
    let book = this.state
    fetch('http://localhost:8080/api/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(book)
    }).then(() => {
      this.props.history.push('/view-all-books')
    })
  }

  render() {
    return (
      <div className="component add-book">
        <h3>Add a Book:</h3>
        <input type="text" onChange={this.handleTextBoxChange} onClick={this.handleTextBoxClick} placeholder="title" name="title" value={this.state.title} />
        <input type="text" onChange={this.handleTextBoxChange} onClick={this.handleTextBoxClick} placeholder="genre" name="genre" value={this.state.genre} />
        <input type="text" onChange={this.handleTextBoxChange} onClick={this.handleTextBoxClick} placeholder="publisher" name="publisher" value={this.state.publisher} />
        <input type="text" onChange={this.handleTextBoxChange} onClick={this.handleTextBoxClick} placeholder="year" name="year" value={this.state.year} />
        <input type="text" onChange={this.handleTextBoxChange} onClick={this.handleTextBoxClick} placeholder="imageURL" name="imageURL" value={this.state.imageURL} />
        <button onClick={this.handleSaveBookClick}>Add Book</button>
      </div>
    )
  }
}
