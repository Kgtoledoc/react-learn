import React, { Component } from 'react';
import { data } from './data.json';
import BookList from './components/BookList'

class Books extends Component {

  render() {
    return (
      <BookList books={data.books} authors={data.authors} />
    )
  }
}


export default Books