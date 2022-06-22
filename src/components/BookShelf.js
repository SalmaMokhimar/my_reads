import Book from "./Book";
import PropTypes from "prop-types";

const BookShelf = ({ books, type, updateShelf }) => {
  const books_of_shelf = books.filter((book) => book.shelf === type);



  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{type}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books_of_shelf.map((book) => (
            <Book book={book} key={book.id} updateShelf={updateShelf} />
          ))}
        </ol>
      </div>
    </div>
  );
};



BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
  updateShelf: PropTypes.func.isRequired,
};

export default BookShelf;