


import React, {useCallback, useState} from "react";
import "./Book.css";

const BookSearch = (props) => {
  const [book, setBook] = useState({
    "author": "",
    "title": "",
    "country": "",
    "language": "",
    "year": "",
  });
  const [filteredBooks, setFilteredBooks] = useState([...props.books]);
  
  
  const searchBooks = useCallback(({author, title, language, country, year} ) => {
    let books = [...props.books];
    if(author.length) {
      books = books.filter(item => item.author.toLowerCase().includes(author.trim().toLowerCase()));
    }
    if(title.length) {
      books = books.filter(item => item.title.toLowerCase().includes(title.trim().toLowerCase()));
    }
    if(country.length) {
      books = books.filter(item => item.country.toLowerCase().includes(country.trim().toLowerCase()));
    }
    if(language.length) {
      books = books.filter(item => item.language.toLowerCase().includes(language.trim().toLowerCase()));
    }
    if(year && year.length) {
      books = books.filter(item => item.year.toString().includes(year.trim()));
    }
    setFilteredBooks(books);
  }, [ props.books ]);
  
  function onChange(e){
    const newBook = {...book, [e.target.name]: e.target.value};
    setBook(newBook);
    searchBooks(newBook);
  }

  const {author, title, year, language, country} = book;
  
  return (
    <div data-testid="book-wrapper">
      <div className="search-form">
        <div>
          <span>author</span>
          <input type="text" data-testid="author" value={author} name="author" onChange={onChange}  />
        </div>
        <div>
          <span>title</span>
          <input type="text" data-testid="title" value={title} name="title" onChange={onChange}   />
        </div>
        <div>
          <span>country</span>
          <input type="text" data-testid="country" value={country} name="country" onChange={onChange}  />
        </div>
        <div>
          <span>language</span>
          <input type="text" data-testid="language" value={language} name="language" onChange={onChange} />
        </div>
        <div>
          <span>year</span>
          <input type="text" data-testid="year" value={year} name="year" onChange={onChange}  />
        </div>
      </div>
      
      <h4 className="result-title">Search Results: </h4>
      <div className="books">
        {
          filteredBooks.map((item, id) =>
          <div className="book" key={id} data-testid="book">
            <div>
              <label>author</label>
              <span>{item.author}</span>
            </div>
             <div>
              <label>title</label>
              <span>{item.title}</span>
            </div>
            <div>
              <label>country</label>
              <span>{item.country}</span>
            </div>
            <div>
              <label>language</label>
              <span>{item.language}</span>
            </div>
            <div>
              <label>year</label>
              <span>{item.year}</span>
            </div>
            <div>
              <label>pages</label>
              <span>{item.pages}</span>
            </div>
          </div>
        ) 
        }
      </div>
    </div>
  );
};

export default BookSearch;