# MyReads Project

This project was part of Udacity's React Nanodegree Program.

> This is a book shelf application that helps you in tracking your book reading goals. The Home page has 3 shelves - books that you are currently reading, that you want to read and ones that you have already read. The application also has a search page where you can search for books and accordingly keep them in different shelves.

## Backend Server

A Backend Server is already provided which has multiple functions to interact with the UI. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Installation

First clone the project. Then in the root directory of your project open terminal, run

```bash
npm install
```

After all the relevant dependencies are added, you need to run a server (local machine). In the terminal, run

```bash
npm start
```

You are all set! Keep coding!
