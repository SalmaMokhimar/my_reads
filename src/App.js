import { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";
import BookList from "./components/BookList";
import SearchBox from "./components/SearchBox";
import { Route, Routes } from "react-router-dom";
import "./App.css";





function App() {
  const [books, setBooks] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //fetch all books from Api
  useEffect(() => {
    BooksAPI.getAll().then((books) => setBooks(books));
  }, []);

 

  //Update the list of books
  const updateBooksList = async (book, shelf) => {
    await BooksAPI.update(book, shelf);
    const updatedBooks = await BooksAPI.getAll();
    setBooks(updatedBooks);
  };



  useEffect(() => {
    if (searchResults.length > 0) setSearchResults(searchResults);
  }, [searchResults]);



  const updateQuery = async (event) => {

    const query = event.target.value;
    const searchResults = !query ? [] : await BooksAPI.search(query);
    searchResults.error
      ? setSearchResults([])
      : setSearchResults(searchResults);
  };




  //shelf change menu
  const shelfChanger = async (event, book) => {
    const { value } = event.target;
    book.shelf = value;
    await updateBooksList(book, value);
  };

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={<BookList books={books} updateShelf={shelfChanger} />}
        />
        <Route
          path="/search"
          element={
            <SearchBox
              updateShelf={shelfChanger}
              query={updateQuery}
              resultsList={searchResults}
              books={books}
            
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;