import React, { Component } from 'react';
import Shelf from './Shelf';

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
    const { shelves, currentShelf } = this.state;
    const { name, shelf } = this.state;
    const { showBooks } = this.state.shelves;
    let clicked = false;
    const toggleShelf = e => {
      clicked = true;
      console.log(e.target.id);
    };
    return (
      <React.Fragment>
        {shelves.map(shelf => (
          <div className="card card-body mb-3" key={shelf.id}>
            <Shelf
              books={this.props.books}
              shelves={this.state.shelves}
              currentShelf={shelf.currentShelf}
              name={shelf.name}
              updateShelf={this.props.updateShelf}
              averageRating={this.props.averageRating}
              // currentShelf={this.props.shelf}
            />
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default Shelves;
