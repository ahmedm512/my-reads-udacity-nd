import React from 'react';
import Book from './book.components';


const BookList = ({updateShelf, books}) => {
    return (
        <ul className="books-grid">
            {books?
                books.map(({title, authors,imageLinks,shelf, ...book}, i)=>{
                    return (
                        <Book
                        updateShelf={updateShelf}
                        key={i}
                        id={book.id}
                        title={title}
                        authors={authors}
                        imgUrl={imageLinks?imageLinks.thumbnail:''}
                        shelf={shelf}
                        />
                    )
                })
                : <p>There Is No Books To Display</p>
            }
        </ul>
    );
};

export default BookList;