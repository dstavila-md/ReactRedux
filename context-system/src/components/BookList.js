import BookShow from './BookShow';

function BookList({ books, onDelete, onEdit }) {
  const renderedBooks = books.map((book) => {
    return (
      <BookShow onEdit={onEdit} onDelete={onDelete} key={book.id} book={book} />
    );
  });

  return (
    <div>
      <div className='book-list'>{renderedBooks}</div>
    </div>
  );
}

export default BookList;
