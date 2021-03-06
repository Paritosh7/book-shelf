import React from "react";
import { Link, useLocation } from "react-router-dom";
import { search, update } from "./BooksAPI";

function SearchBook() {
  const [inputVal, setInputVal] = React.useState("");
  const [searchedBooks, setSearchedBooks] = React.useState([]);
  const shelvedBooks = useLocation().state.books;

  function searchBooks() {
    search(inputVal).then((res) => {
      setSearchedBooks(res);
    });
  }

  /**
   * maintainAppShelfState maintains the shelf state of the books
   * across the Home and Search page. Using and IIFE here!
   */
  (function maintainAppShelfState() {
    if (!searchedBooks.length) return;

    shelvedBooks.forEach((shelvedBook) => {
      let foundBook = searchedBooks.find((book) => book.id === shelvedBook.id);
      if (foundBook) foundBook.shelf = shelvedBook.shelf;
    });
  })();

  React.useEffect(
    () => {
      if (!inputVal) return;
      searchBooks();
      return () => {
        setSearchedBooks([]);
      };
    },
    [inputVal]
  );

  /** set the input state based on change in the input
   * which rerenders the SearchBook Component.
   */
  function handleInput(eve) {
    setInputVal(eve.target.value);
  }

  /**
   * update the user's book shelf by calling update
   * when book's shelf information is changed inside
   * select tag.
   */
  function handleShelfChange(book, eve) {
    update(book, eve.target.value);
  }

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/">
          <button className="close-search">Close</button>
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            value={inputVal}
            onChange={handleInput}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchedBooks.length ? (
            searchedBooks.map((book) => (
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div
                      className="book-cover"
                      style={{
                        width: 128,
                        height: 193,
                        backgroundImage: book.imageLinks
                          ? `url(${book.imageLinks.smallThumbnail})`
                          : `book.imageLinks is null`,
                      }}
                    />
                    <div className="book-shelf-changer">
                      <select
                        value={book.shelf ? book.shelf : "none"}
                        onChange={(eve) => handleShelfChange(book, eve)}
                      >
                        <option value="" disabled>
                          Move to...
                        </option>
                        <option value="currentlyReading">
                          Currently Reading
                        </option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">
                    {book.authors || "Someone"}
                  </div>
                </div>
              </li>
            ))
          ) : (
            <p>Fetching!</p>
          )}
        </ol>
      </div>
    </div>
  );
}

export default SearchBook;
