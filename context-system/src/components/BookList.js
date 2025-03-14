import { useContext } from 'react';
import BooksContext from '../context/books';
import BookShow from './BookShow';

function BookList({ books, onDelete, onEdit }) {
  const { count, incrementCount } = useContext(BooksContext);

  const renderedBooks = books.map((book) => {
    return (
      <BookShow onEdit={onEdit} onDelete={onDelete} key={book.id} book={book} />
    );
  });

  return (
    <div>
      {count}
      <button onClick={incrementCount}>Increment</button>

      <div className='book-list'>{renderedBooks}</div>
    </div>
  );
}

export default BookList;
