import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import SearchBookList from '../components/search-book-list.component';
import * as BooksAPI from '../BooksAPI';


class SearchBooks extends Component {
  constructor(){
    super();
    this.state = {
      searchfield:'',
      searchBooks:[]
    };
}

searchBooks = (query) => {
  BooksAPI.search(query)
  .then((searchBooks)=>{
    this.setState({searchBooks:searchBooks.error ? [] : searchBooks});
  })
  .catch((e)=>{this.setState({searchBooks:[]})})
}

onSearchChange = (event) => {
  this.setState({ searchfield: event.target.value }, () => {
    this.searchBooks(this.state.searchfield);
  })
  
    

  
}

render(){

const {updateShelf, currentBooks} = this.props;

    return (
        <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
        
              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input onChange={this.onSearchChange} type="text" placeholder="Search by title or author" />
        
          </div>
        </div>
        <div className="search-books-results">
        <SearchBookList updateShelf={updateShelf} searchBooks={this.state.searchBooks} currentBooks={currentBooks} />
        </div>
        </div>     
    );
          }
};

export default SearchBooks;