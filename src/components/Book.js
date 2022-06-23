import PropTypes from "prop-types";




const Book = ({ book, updateShelf }) => {
  console.log(book);
  const BookimageURL = book.imageLinks? book.imageLinks.smallThumbnail : "../default-img.png";
  const shelfName = book.shelf ? book.shelf : "none";
  const bookID= book.id;

  return (
    <li key = {bookID} >
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${BookimageURL})`,
            }}>
          </div>
          <div className="book-shelf-changer">
            <select
              onChange={(event) => updateShelf(event, book)}
              value={shelfName}>
              <option value="disabled" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {book.authors ? book.authors.join(", ") : ""}
        </div>
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  updateShelf: PropTypes.func.isRequired,
};

export default Book;