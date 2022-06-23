import Book from "./Book";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";


const SearchBox = ({query, resultsList, books, updateShelf}) => {
  const Updatedresults = resultsList.map((result) => {
    const book = books.find((item) => item.id === result.id);
    return book ? { ...result, shelf: book.shelf } : result;
  });

  return (
    <div className="search-books">
      <div className="search-books-bar">
      <Link className="close-search" to="/"></Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            onChange={query}
            placeholder="Search by book title or author name"
          />
        </div>
      </div>
      <div className="search-books-results">
        {resultsList.length === 0 ? (
          <div>
            <p style={{ textAlign: "center" }}>
              <strong>No matching books found!</strong>
            </p>
          </div>
        ) : (
          ""
        )}
        <ol className="books-grid">
          {Updatedresults.map((result) => (
            <Book book={result} key={result.id} updateShelf={updateShelf} />
          ))}
        </ol>
      </div>
    </div>
  );
};

SearchBox.propTypes = {
  query: PropTypes.func.isRequired,
  resultsList: PropTypes.array.isRequired,
  books: PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired,

};


export default SearchBox;