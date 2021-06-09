import React from 'react';
import Book from './book.components';


const BookList = ({updateShelf, searchBooks, currentBooks}) => {
    return (
        <ul className="books-grid">
            {searchBooks ?
                searchBooks.map(({title, authors,imageLinks,id, ...book}, i)=>{
                    if(currentBooks.some(cBook => cBook.id===id)){
                        book.shelf = currentBooks.find(cBook=> cBook.id === id).shelf
                    }
                    return (
                        <Book
                        updateShelf={updateShelf}
                        key={i}
                        id={id}
                        title={title}
                        authors={authors}
                        imgUrl={imageLinks?imageLinks.thumbnail:''}
                        shelf={book.shelf}
                        />
                    )
                })
                : <p>There Is No Books To Display</p>
            }
        </ul>
    );
};

export default BookList;