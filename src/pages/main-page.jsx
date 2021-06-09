import React from 'react';
import BookShelf from '../components/book-shelf.component';
import {Link} from 'react-router-dom';

const MainPage = ({updateShelf, Books}) => {
    return (
        <div>
        <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
          <BookShelf updateShelf={updateShelf} title='Currently Reading' books={Books.filter((book)=>{return(book.shelf==='currentlyReading')})}/>
          <BookShelf updateShelf={updateShelf} title='Want to Read' books={Books.filter((book)=>{return(book.shelf==='wantToRead')})}/>
          <BookShelf updateShelf={updateShelf} title='Read' books={Books.filter((book)=>{return(book.shelf==='read')})}/>
          </div>
        </div>
        <div className="open-search">
          <Link className='btn' to="/search">Add a book</Link>
        </div>
      </div>
        </div>
    );
};

export default MainPage;