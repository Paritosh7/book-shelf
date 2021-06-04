import React from "react";

/**
 * books -> prop from Home, contains all the shelved books
 * handleShelf -> callback function - used on shelf change.
 */
function Read({ books, handleShelf }) {
  /**
   * An IIFE function to filter books based on book shelf value
   */
  const read = (function myComponentBooks() {
    return books.filter((book) => book.shelf === "read");
  })();

  return (
    <div className="bookshelf-books">
      <ol className="books-grid">
        {read.length ? (
          read.map((book) => (
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
                      value={book.shelf}
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
                <div className="book-authors">{book.authors || "Someone"}</div>
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

export default Read;
