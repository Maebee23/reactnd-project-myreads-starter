import React, { Component } from 'react';
import Book from './Book';

export default class Shelf extends Component {
  state = {
    showBooks: true
  };
  render() {
    const { showBooks } = this.state;
    const { shelves } = this.props;
    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">
            {this.props.name}{' '}
            <i
              onClick={() =>
                this.setState({ showBooks: !this.state.showBooks })
              }
              className="fas fa-book-open fa-xs"
            />
          </h2>
          {showBooks ? (
            <div className="bookshelf-books">
              <ol className="books-grid">
                {this.props.books
                  .filter(book => book.shelf === this.props.currentShelf)
                  .map(book => (
                    <li key={book.id}>
                      <Book
                        book={book}
                        currentShelf={book.shelf}
                        title={book.title}
                        authors={[book.authors]}
                        imageLinks={book.imageLinks}
                        averageRating={book.averageRating}
                        updateShelf={this.props.updateShelf}
                      />
                    </li>
                  ))}
              </ol>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
