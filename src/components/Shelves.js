import React, { Component } from 'react';
import Book from './Book';

class Shelves extends Component {
  state = {
    shelves: [
      {
        id: 1,
        name: 'Currently Reading',
        currentShelf: 'currentlyReading'
      },
      {
        id: 2,
        name: 'Want to Read',
        currentShelf: 'wantToRead'
      },
      {
        id: 3,
        name: 'Read',
        currentShelf: 'read'
      }
    ],
    showBooks: true
  };

  render() {
    const { shelves } = this.state;
    const { showBooks } = this.state;

    return (
      <React.Fragment>
        {shelves.map(shelf => (
          <div className="card card-body mb-3" key={shelf.id}>
            <div className="bookshelf">
              <h2 className="bookshelf-title">
                {shelf.name}{' '}
                <i
                  style={{ cursor: 'pointer' }}
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
                      .filter(book => book.shelf === shelf.currentShelf)
                      .map(book => (
                        <li key={book.id}>
                          <Book
                            book={book}
                            books={this.props.books}
                            averageRating={book.averageRating}
                            currentShelf={book.shelf}
                            title={book.title}
                            authors={[book.authors]}
                            imageLinks={book.imageLinks}
                            updateShelf={this.props.updateShelf}
                          />
                        </li>
                      ))}
                  </ol>
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default Shelves;
