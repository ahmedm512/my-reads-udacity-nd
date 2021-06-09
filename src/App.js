import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBox from './pages/search-page';
import MainPage from './pages/main-page.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class BooksApp extends React.Component {
  constructor(){
		super();
  this.state = {
   books:[]
  }
  
}

componentDidMount(){
  this.fetchBooks();
}

fetchBooks = () => {
  BooksAPI.getAll()
  .then((books) => {
    this.setState({books});
});
}

updateShelf = (id, shelf) => {
  console.log(id,"id")
  BooksAPI.update(id, shelf)
  .then(() => {
    this.fetchBooks();
  })
}



  render() {
    return (
      <Router>
      <Switch>
      <div className="app">
      <Route exact path='/' 
      render={() => (
        <MainPage updateShelf={this.updateShelf} Books={this.state.books}/>
      )}
     />
     <Route exact path='/search' 
     render={() => (
      <SearchBox updateShelf={this.updateShelf} currentBooks={this.state.books}/>
    )}
     />
      </div>
      </Switch>
      </Router>
    )
  }
}

export default BooksApp
