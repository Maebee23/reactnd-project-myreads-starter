import React, { Component } from 'react';
import Book from './Book';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';

class Search extends Component {
  state = {
    query: '',
    searchResults: []
  };

  updateQuery = query => {
    this.setState({ query });
    this.showBooks(query);
  };

  // inspired by walkthrough by Maeva @ https://youtu.be/i6L2jLHV9j8
  //  if there is a query, search BooksAPI, if there is an error set searchResults to empty array,
  // is there are results, update the state with the returned value,
  // if there are no results, set searchresults to empty array
  showBooks = query => {
    query
      ? BooksAPI.search(query).then(searchResults => {
          searchResults.error
            ? this.setState({ searchResults: [] })
            : this.setState({ searchResults: searchResults });
        })
      : this.setState({ searchResults: [] });
  };

  render() {
    const { query } = this.state;
    const { searchResults } = this.state;
    let shelf;
    console.log(searchResults);
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={e => this.updateQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="search-books-results">
          <ol className="books-grid">
            {/* Insprired by walkthrough by Maeav @ https://youtu.be/i6L2jLHV9j8
             map through searchResults and the books array
             check if ids match, is so, set currentShelf 
             to the value from the books array
            */}
            {searchResults.map(
              book => (
                (shelf = 'none'),
                this.props.books.map(
                  bookog =>
                    book.id === bookog.id ? (shelf = bookog.shelf) : ''
                ),
                (
                  <li key={book.id}>
                    <Book
                      book={book}
                      currentShelf={shelf}
                      averageRating={book.averageRating}
                      title={book.title}
                      authors={[book.authors]}
                      imageLinks={book.imageLinks}
                      updateShelf={this.props.updateShelf}
                    />
                  </li>
                )
              )
            )}
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;
