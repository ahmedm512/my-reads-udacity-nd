import React, { Component } from 'react';

class Book extends Component {

  onChange = (e) =>{
    this.props.updateShelf(this.props.id, e.target.value)
  }
  render(){
    const {title, authors=[], imgUrl, shelf="none"} = this.props;
    return (
        <li>
        <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imgUrl})`}}></div>
          <div className="book-shelf-changer">
            <select value={shelf} onChange={this.onChange}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">
        {
            authors.map((author, i) => {
            if(i===0){
                return author;
            }
            else {
                return `, ${author}`
            }
            }
            )}</div>
      </div>
    </li> 
    );
          }
};

export default Book;