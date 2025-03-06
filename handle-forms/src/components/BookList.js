import BookShow from "./BookShow";

function Booklist({books, onEdit, onDelete}) {

  const renderedBooks = books.map((books)=>{
    return (
      <BookShow key={books.id} book={books} onEdit = {onEdit} onDelete={onDelete}/>
    );
  })

  return (
    <div className="book-list">
      {renderedBooks}
    </div>
  );
}

export default Booklist;
