import React, { useEffect, useState } from "react";
import CurrentlyReading from "./CurrentlyReading";
import WantToRead from "./WantToRead";
import Read from "./Read";
import { Link } from "react-router-dom";
import { getAll, update } from "./BooksAPI";
function Home() {
  const [books, setBooks] = useState(() => []);

  async function fetchBooks() {
    const books = await getAll();
    setBooks(books);
  }

  function handleShelfChange(book, shelf) {
    update(book, shelf)
      .then(() => {
        fetchBooks();
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <CurrentlyReading books={books} handleShelf={handleShelfChange} />
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <WantToRead books={books} handleShelf={handleShelfChange} />
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <Read books={books} handleShelf={handleShelfChange} />
            </div>
            <Link to={{ pathname: "/search", state: { books: books } }}>
              <div className="open-search">
                <button>Add a book</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
