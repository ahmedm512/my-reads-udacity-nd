import React from 'react';
import BookList from './book-list.component';

const BookShelf = ({updateShelf, title, books}) => {
    return (
        <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
            <BookList updateShelf={updateShelf} books={books}/>
        </div>
      </div> 

    );
};

export default BookShelf;