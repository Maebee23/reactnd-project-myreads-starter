import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Shelves from './components/Shelves';
import Search from './components/Search';
import 'bootstrap/dist/css/bootstrap.min.css';

class BooksApp extends React.Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  };
  render() {
    console.log(this.state.books);
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <div className="list-books">
              <div className="list-books-content">
                <Header />
                <div>
                  <Shelves
                    books={this.state.books}
                    updateShelf={this.updateShelf}
                  />
                </div>
              </div>
              <div className="open-search">
                <Link to="/search">Add a book</Link>
              </div>
            </div>
          )}
        />
        <Route
          path="/search"
          render={({ history }) => (
            <Search
              books={this.state.books}
              updateShelf={this.updateShelf}
              onUpdateShelf={(book, shelf) => {
                this.updateShelf(book, shelf);
                history.push('/');
              }}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
