import React, { useEffect, useState } from "react";
import './BookSearch.css';

const BookSearch = ({books}) => {
  const [filteredBooks, setFilteredBooks] = useState(books);
  const [filters, setFilters] = useState({
    author: "", title: "", country:"", language: "", years: ""
  });
  
  const handleInput = (e) => {
    setFilters({...filters, [e.target.name]: e.target.value.trim()});
  }
  
  const searchBooks = ({author, title, country, language, years}) => {
    let results = [...books];

    if(author.length) {
      results = results.filter(book => book.author.toLowerCase().includes( author.toLowerCase()));
    }
    if(title.length) {
      results = results.filter(book => book.title.toLowerCase().includes( title.toLowerCase()));
    }
    if(country.length) {
      results = results.filter(book => book.country.toLowerCase().includes( country.toLowerCase()));
    }
    if(language.length) {
      results = results.filter(book => book.language.toLowerCase().includes(language.toLowerCase()));
    }
    if(years.length) {
      results = results.filter(book => book.year.toString().includes( years.toLowerCase()));
    }

    setFilteredBooks(results);
  };
  
  useEffect(() => {
    searchBooks(filters);
  }, [filters]);
  

  return (
    <>
      <div>
        <label htmlFor="author">Author</label>
        <input id="author" data-testid="author" name="author" onChange={(e)=> handleInput(e)} />
      </div>
       <div>
        <label htmlFor="title">Title</label>
        <input id="title" data-testid="title" name="title" onChange={handleInput} />
      </div>
       <div>
        <label htmlFor="country">Country</label>
        <input id="country" data-testid="country" name="country" onChange={handleInput} />
      </div>
       <div>
        <label htmlFor="language">Language</label>
        <input id="language" data-testid="language" name="language" onChange={handleInput} />
      </div>
       <div>
        <label htmlFor="year">Year</label>
      <input id="year" data-testid="year" name="years" onChange={handleInput} />
      </div>
      
      <div className="books">
        {filteredBooks.map((book, index) => 
          <div className="book" data-testid="book" key={index}>
             <span>{book.author}</span>    
             <span>{book.country}</span>    
             <span>{book.language}</span>    
             <span>{book.pages}</span>      
             <span>{book.title}</span>    
             <span>{book.year}</span>    
           </div>  
        )}
      </div>
    </>
  );
};

export default BookSearch;