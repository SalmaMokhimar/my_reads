import BookShelf from "./BookShelf";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const BookList = ({ books, updateShelf }) => {



  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf
            updateShelf={updateShelf}
            type="currentlyReading"
            books={books}
            title="Currently Reading"
          />
          <BookShelf
            updateShelf={updateShelf}
            type="wantToRead"
            books={books}
            title="Want to Read"
          />
          <BookShelf
            updateShelf={updateShelf}
            type="read"
            books={books}
            title="Read"
          />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};





BookList.propTypes = {
  books: PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired,
};

export default BookList;