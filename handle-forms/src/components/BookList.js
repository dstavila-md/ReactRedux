import BookShow from "./BookShow";

function Booklist({books, onDelete}) {

  const renderedBooks = books.map((books)=>{
    return (
      <BookShow key={books.id} book={books} onDelete={onDelete}/>
    );
  })

  return (
    <div className="book-list">
      {renderedBooks}
    </div>
  );
}

export default Booklist;
