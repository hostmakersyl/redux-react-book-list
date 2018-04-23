import React, { Component } from 'react';
import './App.css';
import BookList from './containers/book-list';
import BookDetails from './containers/book_details';

class App extends Component {
  render() {
    return (
      <div className="App">
          <BookList />
        <BookDetails/>
          </div>
    );
  }
}

export default App;
