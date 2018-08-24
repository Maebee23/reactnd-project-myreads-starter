import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

var Rating = require('react-rating');

class Book extends Component {
  state = {
    currentShelf: 'none',
    stars: [1, 2, 3]
  };

  updateNewShelf = e => {
    this.props.updateShelf(this.props.book, e.target.value);
    this.setState({ currentShelf: e.target.value });
  };

  render() {
    const hasImage = this.props.imageLinks
      ? this.props.imageLinks.thumbnail
      : '';

    console.log(this.props.currentShelf);
    return (
      <div className="book">
        {this.props.currentShelf === 'read' ? (
          <Rating
            stop={5}
            emptySymbol={'far fa-star'}
            fullSymbol={'fa fa-star'}
          />
        ) : null}
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${hasImage})`
            }}
          />
          <div className="book-shelf-changer">
            <select
              onChange={e => {
                this.updateNewShelf(e);
              }}
              value={this.props.currentShelf}
            >
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.title}</div>
        <div className="book-authors">{this.props.authors}</div>
      </div>
    );
  }
}

export default Book;
