import React from "react";
function CurrentlyReading({ books, handleShelf }) {
  const current = (function myComponentBooks() {
    return books.filter((book) => book.shelf === "currentlyReading");
  })();

  return (
    <div className="bookshelf-books">
      <ol className="books-grid">
        {current.length ? (
          current.map((book) => (
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
                      value={book.shelf ? book.shelf : ""}
                      onChange={(eve) => handleShelf(book, eve.target.value)}
                    >
                      <option value="move" disabled>
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
                <div className="book-authors">{book.authors}</div>
              </div>
            </li>
          ))
        ) : (
          <div>nothing to render</div>
        )}
      </ol>
    </div>
  );
}

export default CurrentlyReading;